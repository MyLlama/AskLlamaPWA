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
              class="chat-container"
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
        <!-- <div class="lds-dual-ring"></div> -->
        <img style="width: 100px" src="../assets/new.gif" />
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input
        type="text"
        class="question-input"
        v-model="inputMessage"
        @input="validateInput"
        @keyup.enter="sendMessage"
        placeholder="How do I find peace in the middle of chaos?"
        ref="questionInput"
        :title="showHover ? 'Select at least one master to ask a question' : ''"
        v-on:input="validateInput"
        v-on:focus="validateInput"
      />
      <button
        class="send-button"
        @click="sendMessage"
        :disabled="!selectedMasters.length || loading"
      >
        <i class="fa fa-paper-plane"></i>
      </button>

      <div
        v-if="showHover && touchedInput && errorMessageVisible"
        class="error-message"
      >
        Select the master to ask a question !!
      </div>
    </form>
    <div v-show="messages.length > 0" class="clear-chat-button">
      <button @click="clearChat">
        <img class="clear-chat-button-img" src="../assets/refresh.png" />
      </button>
    </div>
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
      inputMessage: "",
      messages: [],
      typingMessage: "",
      userAvatar: user,
      loading: false,
      conversationHistory: [],
      touchedInput: false,
      showHover: false,
      errorMessageVisible: false,
    };
  },
  methods: {
    showErrorMessage() {
      this.errorMessageVisible = true;

      setTimeout(() => {
        this.errorMessageVisible = false;
      }, 2000);
    },
    validateInput() {
      this.touchedInput = true;
      this.showHover =
        this.inputMessage.trim().length > 0 &&
        this.selectedMasters.length === 0;

      if (this.showHover) {
        this.showErrorMessage();
      }
    },

    clearChat() {
      this.messages = [];
      this.conversationHistory = [];
    },
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

      const apiKey = process.env.VUE_APP_OPENAI_API_KEY;
      // Use the environment variable
      const apiEndpoint = "https://api.openai.com/v1/chat/completions";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          ...this.conversationHistory, // Include the existing conversation history
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
      if (!this.inputMessage) {
        return;
      }

      if (!this.selectedMasters.length) {
        this.showHover = true;
        return;
      }

      // Clear the error message and send the message
      this.showHover = false;

      // if (!this.inputMessage || !this.selectedMasters.length) return;

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
  height: 90%;
  overflow-y: auto;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  background: white;
  height: 90%;
  overflow-y: auto;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  background: white;
  display: flex;
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
  /* border: 1px solid black; */
}
.message-avatar {
  /* padding: 5px; */
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
  background-color: #f5f5f5;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

form {
  display: flex;
  gap: 10px;
}

input {
  flex-grow: 1;
  /* margin-right: 1rem; */
}

.question-input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: 50px;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.question-input:focus {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  /* background-color: #0d8aed; */
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a5298,
    #1e3c72
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a5298,
    #1e3c72
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.input-container {
  display: flex;
  gap: 1rem;
}
.error-message {
  color: rgb(255, 255, 255);
  font-size: 0.8em;
  margin-bottom: 0.5em;
  position: absolute;
  bottom: 15vh;
  left: 2vh;
  font-weight: bold;
  font-family: sans-serif;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 5px;
  background-color: #ec1616;
  border-radius: 5px;
  animation: bounce 0.01s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(2px);
  }
}

.message {
  margin-bottom: 1rem;
}

.pre-wrap {
  white-space: pre-wrap;
  /* word-break: break-word; */
  margin: 10px;
  text-align: justify;
  margin-top: 5px;
  /* border: 2px solid black; */
}

.master-message,
.user-message {
  display: flex;
  margin-bottom: 20px;
}

.master-message,
.user-message {
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
.chatbox-content {
  position: relative;
  overflow-y: hidden;
  height: 52vh;
  margin-bottom: 5px;
  /* border: 1px solid red; */
}

@media (max-width: 767px) {
  .error-message {
    bottom: 15vh;
    left: 2vh;
  }
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
    height: 60vh;
    /* border: 1px solid red; */
  }
  .chatbox-content {
    position: relative;
    overflow-y: hidden;
    height: 57vh;
    /* border: 1px solid red; */
  }

  .send-button {
    border-radius: 50%;
    padding: 1rem 1rem;
    font-size: 1.1rem;
  }
  /* .send-button:hover {
    background-color: #3f9a40;
  } */
  .user-message,
  .master-message {
    display: flex;
    align-items: flex-start; /* Added to align the text at the top */
    margin-bottom: 1rem; /* Added to create space between messages */
  }

  .master-message,
  .user-message {
    margin-left: 5px;
  }

  .master-message {
    /* padding-left: 5px; Added to create space around the Master's name */
  }
  input::placeholder {
    font-size: 13px;
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
  border: 4px solid #f07812;
  border-color: #f07812 transparent #f07812 transparent;
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

.clear-chat-button {
  justify-content: center;
  position: absolute;
  right: 30px;
  top: 42vh;
  height: 32px;
  width: 32px;
  background-color: #ffff;
  border-radius: 50%;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
}

.clear-chat-button-img {
  width: 26px;
  margin-top: 5px;
  background-color: #ffff;
  padding: 2px;
  height: 26px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.clear-chat-button button {
  border: none;
  margin: 0px;
  padding: 0px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  align-items: center;
  background-color: #ffff;

  justify-content: center;
}
.clear-chat-button-img:hover {
  border: 2px solid #f07812;
}
</style>
