<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="logo">
        <strong>Powered by Llama</strong>
      </div>
      <div class="website">
        <a href="https://www.myllama.co">www.myllama.co</a>
      </div>

      <div class="legal">
        <a href="#" class="link-text disclaimer" @click.prevent="showDisclaimer">
          Disclaimer
        </a>
        <the-disclaimer v-show="isDisclaimerVisible" @close="closeDisclaimer">
          <template v-slot:header>
            <h2>Disclaimer</h2>
          </template>
          <template #body>
            <p>
              This is a research project, might give incorrect and irrelevant
              answers sometimes.
            </p>
          </template>
        </the-disclaimer>

        <a href="#" class="link-text privacy-policy" @click.prevent="showPrivacyPolicy">
          Privacy Policy
        </a>
        <the-disclaimer
          v-show="isPrivacyPolicyVisible"
          @close="closePrivacyPolicy"
        >
          <template v-slot:header>
            <h2>Privacy Policy</h2>
          </template>
          <template #body>
            <p>This is our Privacy Policy.</p>
          </template>
        </the-disclaimer>
      </div>
      
    </div>
  </footer>
</template>

<script>
import TheDisclaimer from "./TheDisclaimer.vue";
export default {
  name: "AppFooter",
  components: {
    TheDisclaimer,
  },
  data() {
    return {
      isDisclaimerVisible: true,
      isPrivacyPolicyVisible: false,
    };
  },
  methods: {
    showDisclaimer() {
      this.isDisclaimerVisible = true;
    },
    closeDisclaimer() {
      this.isDisclaimerVisible = false;
    },
    showPrivacyPolicy() {
      this.isPrivacyPolicyVisible = true;
    },
    closePrivacyPolicy() {
      this.isPrivacyPolicyVisible = false;
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #f79311;
  color: #ffffff;
  text-align: center;
  margin-top: 25px;
  font-size: 0.9rem;
  height: 10vh;
}

.website {
  text-decoration: underline;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.logo {
  font-size: 1.2rem;
}

.link-text {
  color: #ffffff;
  cursor: pointer;
  margin: 0 10px;
}

a {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>
