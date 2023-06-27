<template>
  <div class="chatbox">
    <!-- <div class="selected-masters">
      <p>Selected Masters</p>
        <div v-for="(master, index) in selectedMasters" :key="index" class="selected-master">
            <img :src="master.image" :alt="master.name" />
        </div>
    </div> -->
    <div class="chatbox-content">
      <div class="messages" ref="messagesContainer">
        <transition name="typing" mode="out-in">
          <div>
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="[
                message.type === 'user' ? 'user-message' : 'master-message',
              ]"
            >
              <img
                v-if="message.type === 'master'"
                :src="message.image"
                :alt="message.author"
                class="message-avatar"
              />
              <img v-else :src="userAvatar" alt="User" class="message-avatar" />
              <pre class="pre-wrap">{{ message.text }}</pre>
            </div>
          </div>
        </transition>
      </div>
      <div class="spinner" v-if="loading">
        <div class="lds-dual-ring"></div>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input
        type="text"
        class="question-input"
        v-model="inputMessage"
        @keyup.enter="sendMessage"
        placeholder="How do I find peace in the middle of chaos?"
        ref="questionInput"
        :disabled="!selectedMasters.length || loading"
        :title="showHover ? 'Select at least one master to ask question' : ''"
      />
      <button
        class="send-button"
        @click="askQuestion"
        :disabled="!selectedMasters.length || loading"
      >
        <i class="fa fa-paper-plane"></i>
      </button>
    </form>
  </div>
</template>

<script>
import user from "../assets/user.jpeg";
import axios from "axios";
export default {
  name: "AppChatbox",
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
      showHover: true,
      inputMessage: "",
      messages: [],
      typingMessage: "",
      userAvatar: user,
      loading: false,
      conversationHistory: [], 
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
      console.log("Getting GPT response for prompt:", prompt);

      const apiKey = process.env.VUE_APP_OPENAI_API_KEY; // Use the environment variable
      const apiEndpoint = "https://api.openai.com/v1/chat/completions";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        model: "gpt-3.5-turbo",
        messages: [
        ...this.conversationHistory,  // Include the existing conversation history
          { role: "system", content: master.prompt },
          { role: "user", content: `Q: ${prompt}\n` },
        ],
      };

      try {
        console.log("Making API call with data:", data);
        const response = await axios.post(apiEndpoint, data, { headers });
        console.log(
          "GPT response:",
          response.data.choices[0].message.content.trim()
        );

        // Save the assistant's response to the conversation history
        this.conversationHistory.push({
          role: "assistant",
          content: response.data.choices[0].message.content.trim(),
        });
        
        return response.data.choices[0].message.content.trim();
      } catch (error) {
        console.error("Error calling ChatGPT API:", error);
        return "Sorry, I am unable to provide an answer at the moment.";
      } finally {
        const container = this.$refs.messagesContainer;
        container.scrollTop = container.scrollHeight;
        var objDiv = document.getElementsByClassName("messages");
        objDiv.scrollTop = objDiv.scrollHeight;
      }
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer;
        container.scrollTop = container.scrollHeight;
      });
    },

    async sendMessage() {
      if (!this.inputMessage || !this.selectedMasters.length) return;

      const userMessage = this.inputMessage;
      const userAvatar =
        "https://secure.gravatar.com/avatar/84e1cab23663f968345fafb812c73a85?s=50&d=mm&r=g";

      this.messages.push({
        authorImage: userAvatar,
        text: userMessage,
        type: "user",
      });
      this.inputMessage = "";
      this.loading = true;

      // Save the user's message to the conversation history
      this.conversationHistory.push({
        role: "user",
        content: `Q: ${userMessage}\n`,
      });

      for (const master of this.selectedMasters) {
        // Call the ChatGPT API and get response
        const gptResponse = await this.getGptResponse(userMessage, master);
        const masterResponse = {
          author: master.name,
          image: master.image,
          text: gptResponse,
          type: "master",
        };
        this.messages.push(masterResponse);
      }

      this.loading = false; // Add this line
    },
  },
  watch: {
    messages() {
      this.scrollToBottom();
    },

    selectedMasters: {
      immediate: true,
      handler(selectedMasters) {
        this.showHover = selectedMasters.length === 0;
      },
    },
  },
  mounted() {
    // Focus the input when the component is mounted
    this.$refs.questionInput.focus();
  },
};
</script>

<style scoped>
.messages {
  font-size: 1.1rem;
  height: 90%;
  overflow-y: auto;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
}

@media (max-width: 768px) {
  .masters-list {
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
  background-color: #90ee90;
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

.pre-wrap {
  white-space: pre-wrap;
  word-break: break-word;
  margin: 10px;
  margin-top: 0px;
}

.send-button:hover {
  background-color: #77dd77;
}

.send-button i {
  margin-right: 0 rem;
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
  display: flex;
  margin-bottom: 20px;
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

pre {
  font-family: serif;
}

@media (max-width: 767px) {
  .author-image {
    width: 20px;
    height: 20px;
  }

  .message-avatar {
    width: 20px;
    height: 20px;
  }
  .chatbox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45vh;
  }

  .send-button {
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
  }
  .send-button:hover {
    background-color: #3f9a40;
  }
  .user-message,
  .master-message {
    display: flex;
    align-items: flex-start; /* Added to align the text at the top */
    margin-bottom: 1rem; /* Added to create space between messages */
  }

  .master-message + .user-message {
    margin-left: 5px;
  }

  .master-message {
    padding-left: 5px; /* Added to create space around the Master's name */
  }
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.lds-dual-ring {
  display: inline-block;
  width: 32px;
  height: 32px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 100%;
  height: 100%;
  margin: 1px;
  border-radius: 50%;
  border: 3px solid #2196f3;
  border-color: #2196f3 transparent #2196f3 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.chatbox-content {
  position: relative;
  overflow-y: hidden;
  height: 40vh;
  margin-bottom: 5px;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.selected-masters {
  display: inline-flex;
  gap: 10px;
  padding: 10px;
}

.selected-master img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.selected-master p {
  text-align: center;
}

/* Tooltip Styles */

input[title] {
  position: relative;
}

input[title]::after {
  content: attr(title);
  position: absolute;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  transition: opacity 0.3s;
}

input:hover[title]::after {
  opacity: 1;
}
</style>
