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
        <a
          type="button"
          class="btn-modal disclaimer"
          @click="showDisclaimer"
        >
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

        <a
          class="btn-modal privacy-policy"
          @click="showPrivacyPolicy"
        >
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
            <div style="text-align: left; margin: 3%;">

            
            At myllama, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Llama and how we use it.
If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in myllama. This policy is not applicable to any information collected offline or via channels other than this website.
<h2>Consent</h2>
<p>
  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
</p>
<h2>Information we collect</h2>
<p>
  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.

</p>
<h2>
  How we use your information

</h2>
<p>
  We use the information we collect in various ways, including to:
  <ul>
    <li>
      Provide, operate, and maintain our website

    </li>
    <li>
      Improve, personalize, and expand our website

    </li>
    <li>
      Understand and analyze how you use our website

    </li>
    <li>
      Develop new products, services, features, and functionality

    </li>
    <li>
      Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes

    </li>
    <li>
      Send you emails

    </li>
    <li>
      Find and prevent fraud

    </li>
  </ul>

</p>
</div>
          </template>
        </the-disclaimer>
      </div>
      <!-- <div class="website">
        Visit our website: <a href="https://www.myllama.co">www.myllama.co</a>
      </div> -->
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
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 25px;
  font-size: 0.9rem;
  width: 100%;            /* The absolute position affects the width, so fix it to 100% */
  /* bottom: 0; */
  margin-left: -0.9%;       
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
  /* background: antiquewhite; */
  border: none;
  color:#ffffff;
  /* border-radius: 21px; */
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
