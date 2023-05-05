<template>
  <div class="chatbox">
    <p>Selected Masters: {{ selectedMastersCount }}</p>
    <div class="messages">
      <transition name="typing" mode="out-in">
        <div>
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="[message.type === 'user' ? 'user-message' : 'master-message']"
          > 
            <img
              v-if="message.type === 'master'"
              :src="message.image"
              :alt="message.author"
              class="message-avatar"
            />
            <img v-else :src="userAvatar" alt="User" class="message-avatar" />
            <strong
              >{{ message.type === 'master' ? message.author : 'User'

              }}:</strong
            >
            <pre>{{ message.text }}</pre>
          </div>
        </div>
      </transition>
    </div>
    <form @submit.prevent="sendMessage">
      <input
        type="text"
        class="question-input"
        v-model="inputMessage"
        @keyup.enter="sendMessage"
        placeholder="Ask a question..."
        ref="questionInput"
      />
      <button class="send-button" @click="askQuestion">
        <i class="fas fa-paper-plane"></i> Send
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AppChatbox',
  props: {
    selectedMasters: {
      type: Array,
      default: () => [],
    },
    selectedMastersCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      inputMessage: '',
      messages: [],
      typingMessage: '',
      userAvatar: 'https://secure.gravatar.com/avatar/84e1cab23663f968345fafb812c73a85?s=50&d=mm&r=g',
    };
  },
  methods: {
    typeMessage(message) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        this.typingMessage += message[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed by changing this value (milliseconds)
  },
  async getGptResponse(prompt, master) {
  console.log('Getting GPT response for prompt:', prompt);

  const apiKey = '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';
  const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: master.prompt },
      { role: 'user', content: `Q: ${prompt}\n` },
    ],
  };

  try {
    console.log('Making API call with data:', data);
    const response = await axios.post(apiEndpoint, data, { headers });
    console.log('GPT response:', response.data.choices[0].message.content.trim());
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    return 'Sorry, I am unable to provide an answer at the moment.';
  }
},

async sendMessage() {
  if (!this.inputMessage || !this.selectedMasters.length) return;

  const userMessage = this.inputMessage;
  const userAvatar = "https://secure.gravatar.com/avatar/84e1cab23663f968345fafb812c73a85?s=50&d=mm&r=g";

  this.messages.push({ authorImage: userAvatar, text: userMessage, type: 'user' });
  this.inputMessage = '';

  const masterResponses = await Promise.all(
    this.selectedMasters.map(async (master) => {
      // Call the ChatGPT API and get response
      const gptResponse = await this.getGptResponse(userMessage, master);
      return { author: master.name, image: master.image, text: gptResponse, type: 'master' };
    })
  );

  for (const masterResponse of masterResponses) {
    this.messages.push(masterResponse);
  }
}


  },
  mounted() {
  // Focus the input when the component is mounted
  this.$refs.questionInput.focus();
},
};
</script>

<style scoped>
.messages {
  height: 400px;
  overflow-y: auto;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: left;
  overflow-x: hidden;
  word-wrap: break-word;
  white-space: pre-wrap;
}

@media (max-width: 768px) {
  .masters-list {
    max-height: 300px;
    overflow-y: auto;
  }
}
.author-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
}
.message-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
}

form {
  display: flex;
}

input {
  flex-grow: 1;
  margin-right: 1rem;
}
.question-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
}

.send-button {
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  padding: 8px 16px;
}

.message {
  margin-bottom: 1rem;
}

.send-button:hover {
  background-color: #1976d2;
}

.send-button i {
  margin-right: 0.5rem;
}

.send-button {
  background-color: #2196f3;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #1976d2;
}

.master-message,
.user-message {
  display: inline-flex;
  align-items: center;
}

.master-message + .user-message {
  margin-left: 5px;
}
.typing-enter-active,
.typing-leave-active {
  transition: all 0.3s;
}

.typing-enter,
.typing-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 767px) {
  .messages {
    height: 300px;
  }

  .author-image {
    width: 20px;
    height: 20px;
  }

  .message-avatar {
    width: 20px;
    height: 20px;
  }

  .send-button {
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
