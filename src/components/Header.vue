<template>
  <header class="header">
    <div class="header-container">
      <a href="https://www.myllama.co/">
        <img
        class="header-logo"
        src="https://www.myllama.co/wp-content/uploads/2023/01/LAMA-logo_Final-01.png"
        alt="Ask Llama"
      />
      </a>
      <div class="header-text">
        <h1>Ask Llama</h1>
        <h2>Modern Problems. Timeless Answers</h2>
      </div>
      <button
        v-if="showInstallButton"
        id="install-button"
        class="install-button"
        @click="installApp"
      >
        Install
      </button>

    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      deferredPrompt: null,
      showInstallButton: false,
    };
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
  },
  beforeUnmount() { // Update this line
    window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
  },
  methods: {
    handleBeforeInstallPrompt(event) {
      event.preventDefault();
      this.deferredPrompt = event;
      this.showInstallButton = true;
    },
    async installApp() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        const choiceResult = await this.deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        this.deferredPrompt = null;
        this.showInstallButton = false;
      }
    },
  },
};

</script>

<style scoped>
.install-button {
  display: none;
  background-color: #ffffff;
  border: none;
  color: #f79311;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 5px;
}

.install-button.show-install {
  display: block;
}

.header {
  background-color: #f79311;
  color: white;
  padding: 1rem;
  height: 10vh;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.header-logo {
  width: 80px;
  height: auto;
  margin-right: 20px;
}

.header-text {
  text-align: left;
}

h1,
h2 {
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.2rem;
}

h2 {
  font-size: 20px;
  font-weight: normal;
}

@media (max-width: 768px) {
  .header-logo {
    width: 40px!important;
  }
  .header-container {
    justify-content: left;
    flex-wrap: inherit;
  }
}
</style>
