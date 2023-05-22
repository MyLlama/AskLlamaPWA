<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="logo">
        <strong>Powered by Llama</strong>
      </div>
      <!-- <div class="disclaimer">
        <p>
          This is a research project, might give incorrect and irrelevant
          answers sometimes.
        </p>
      </div> -->
      <div class="legal">
        <button
          type="button"
          class="btn-modal disclaimer"
          @click="showDisclaimer"
        >
          Disclaimer
        </button>
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

        <button
          type="button"
          class="btn-modal privacy-policy"
          @click="showPrivacyPolicy"
        >
          Privacy Policy
        </button>
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
      <div class="website">
        Visit our website: <a href="https://www.myllama.co">www.myllama.co</a>
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
      isDisclaimerVisible: false,
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
  background-color: #f79311; /* Updated background color from #f3c460 to #f79311 */
  color: #ffffff; /* Updated text color */
  text-align: center;
  margin-top: 25px;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 1.2rem;
}

a {
  color: #ffffff; /* Updated link color */
  text-decoration: none;
}

.btn-modal {
  background: antiquewhite;
  border: 3px solid white;
  border-radius: 21px;
  color: #666666;
  cursor: pointer;
  float: left;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;

  /* text-transform: uppercase; */
}
.disclaimer {
  margin-right: 20px;
}

.privacy-policy {
  margin-left: 20px;
}

.legal {
  margin: 20px 0;
}
a:hover {
  text-decoration: underline;
}

.btn-modal:hover {
  border-radius: 25px;
  letter-spacing: 2px;
}
</style>
