<template>
  <div class="chatbox">
    <div class="messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[message.type === 'user' ? 'user-message' : 'master-message']"
      >
        <strong>{{ message.author }}:</strong> {{ message.text }}
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="inputMessage" type="text" placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AppChatbox',
  props: {
    master: Object,
  },
  data() {
    return {
      inputMessage: '',
      messages: [],
    };
  },
  methods: {
  async getGptResponse(prompt) {
    console.log('Getting GPT response for prompt:', prompt);
    
    const apiKey = 'your_openai_api_key';
    const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    const data = {
      prompt: prompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.8,
    };

    try {
      const response = await axios.post(apiEndpoint, data, { headers });
      console.log('GPT response:', response.data.choices[0].text.trim());
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      return 'Sorry, I am unable to provide an answer at the moment.';
    }
  },

  async sendMessage() {
    if (!this.inputMessage || !this.selectedMasters.length) return;

    const userMessage = this.inputMessage;
    this.messages.push({ author: 'User', text: userMessage, type: 'user' });
    this.inputMessage = '';

    for (const master of this.selectedMasters) {
        // Prepare the prompt for ChatGPT
        const prompt = `User asked a question to ${master.name}: "${userMessage}". How would ${master.name} respond?`;
        console.log('Sending prompt to ChatGPT API:', prompt);

        // Call the ChatGPT API
        const gptResponse = await this.getGptResponse(prompt);

        // Add the response to the messages array
        console.log('Adding GPT response to the chat:', gptResponse);
        this.messages.push({ author: master.name, text: gptResponse, type: 'master' });
    }
  },
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
}

.user-message {
  color: blue;
}

.master-message {
  color: green;
}

form {
  display: flex;
}

input {
  flex-grow: 1;
  margin-right: 1rem;
}
</style>
