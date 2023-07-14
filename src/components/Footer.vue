<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- <div class="logo">
        <strong>Powered by </strong>
      </div> -->
      <!-- <div class="website">
        <a target="_blank" href="https://www.myllama.co">www.myllama.co</a>
      </div> -->

      <div class="legal">
        <!-- <a
          href="#"
          class="link-text disclaimer"
          @click.prevent="showDisclaimer"
        >
          Disclaimer
        </a> -->
        <the-disclaimer v-show="isDisclaimerVisible" @close="closeDisclaimer">
          <template v-slot:header>
            <h2 style="font-family: 'Trebuchet MS', sans-serif">Disclaimer</h2>
          </template>
          <template #body>
            <ul class="custom-bullet">
              <br />

              <li>
                AskLlama is an artificial intelligence program that doesn’t take
                itself too seriously. Hope you don't too 🙂 🙃
              </li>
              <br />
              <li>
                As much as we love our AskLlama characters, they are not the
                originals but only representations. Don't worry though, they
                still have all the personality and charm of the original Masters
                😎
              </li>
              <br />
              <li>
                AskLlama responses are for informational purposes only and
                should not be treated as sage advice. So, if you're looking to
                quit your job and become a llama herder because of something we
                said, maybe double check with an actual professional first.
              </li>
              <br />
              <li>
                AskLlama may occasionally provide inaccurate information or use
                humour (our best quality obviously) that may not be everyone’s
                cup of tea.
              </li>
              <br />

              <br />
              <p>
                Ask away, but don't sue us if it gets sassy! We're just a bunch
                of llamas trying to make your day a little brighter!
              </p>
            </ul>
          </template>
        </the-disclaimer>

        <!-- <a
          href="#"
          class="link-text privacy-policy"
          @click.prevent="showPrivacyPolicy"
        >
          Privacy Policy
        </a> -->
        <!-- <the-disclaimer
          v-show="isPrivacyPolicyVisible"
          @close="closePrivacyPolicy"
        >
          <template v-slot:header>
            <h2>Privacy Policy</h2>
          </template>

          <template #body>
            <p class="privacy-policy-content">
              At MyLlama, we value the privacy of our visitors. This Privacy
              Policy explains the types of information we collect and how we use
              it. If you have any additional questions or need more information,
              please don't hesitate to contact us. This Privacy Policy applies
              only to our online activities and is valid for visitors to our
              website with respect to the information they share and/or collect
              on MyLlama. It does not apply to any offline information or
              information collected through other channels. By using our
              website, you consent to our Privacy Policy and agree to its terms.
              <br />
              <br />

              <span>Information We Collect:</span> When you use our website, you
              may be asked to provide certain personal information. The reasons
              for collecting this information will be made clear to you at the
              time of collection. If you contact us directly, we may receive
              additional information such as your name, email address, phone
              number, the contents of your message, and any other information
              you choose to provide. When you register for an account, we may
              ask for your contact information, including items such as your
              name, company name, address, email address, and telephone number.
              <br />

              <span>How We Use Your Information:</span> We use the information
              we collect for various purposes, including providing, operating,
              and maintaining our website, improving and personalizing user
              experiences, understanding and analyzing website usage, developing
              new products and services, communicating with users, and sending
              updates and promotional information. We may also use your
              information to prevent fraud.
              <br />

              <span>Log Files: </span>
              MyLlama follows standard procedures for using log files. These
              files log visitors when they visit websites. The information
              collected may include internet protocol (IP) addresses, browser
              type, Internet Service Provider (ISP), date and time stamps,
              referring/exit pages, and possibly the number of clicks. This
              information is used for analyzing trends, administering the site,
              tracking user movement, and gathering demographic information. The
              collected information is not linked to any personally identifiable
              information.
              <br />

              <span> Cookies and Web Beacons:</span>
              Like many other websites, MyLlama uses cookies to enhance user
              experiences and personalize web page content. Cookies store
              information about visitors' preferences and the pages they access
              or visit. This information is used to optimize the user experience
              by customizing content based on the visitor's browser type and
              other information.
              <br />

              <span> Advertising Partners Privacy Policies:</span>
              Please consult the respective Privacy Policies of our advertising
              partners for detailed information. Third-party ad servers or ad
              networks may use technologies like cookies, JavaScript, or web
              beacons to personalize advertising content and measure the
              effectiveness of their campaigns. MyLlama has no access to or
              control over these cookies used by third-party advertisers.
              <br />

              <span> Third-Party Privacy Policies:</span>
              MyLlama's Privacy Policy does not apply to other advertisers or
              websites. We recommend reviewing the Privacy Policies of
              third-party ad servers for detailed information on their practices
              and instructions on how to opt out of certain options. You can
              also disable cookies through your browser settings. Visit your
              browser's website for more information on managing cookies.
              <br />

              <span>
                CCPA Privacy Rights (Do Not Sell My Personal Information):</span
              >
              Under the CCPA, California consumers have the right to request
              disclosure of the categories and specific pieces of personal data
              collected by a business, request deletion of personal data, and
              request a business that sells personal data not to sell their
              personal data. If you would like to exercise any of these rights,
              please contact us. We have one month to respond to your request.
              <br />

              <span> GDPR Data Protection Rights:</span>
              You have the right to access, correct, erase, restrict processing,
              object to processing, and request data portability. If you would
              like to exercise any of these rights, please contact us. We have
              one month to respond to your request.
              <br />

              <span>Children's Information:</span>
              Protecting children's privacy online is important to us. We
              encourage parents and guardians to monitor and guide their
              children's online activities. MyLlama does not knowingly collect
              personal identifiable information from children under the age of
              13. If you believe that your child has provided personal
              information on our website, please contact us immediately, and we
              will make our best efforts to promptly remove such information
              from our records.
            </p>
          </template>
        </the-disclaimer> -->
      </div>
      <p class="new_footer">
        <a target="_blank" href="https://www.myllama.co">
          <!-- 𝘑𝘰𝘪𝘯 𝘓𝘭𝘢𝘮𝘢'𝘴 𝘱𝘳𝘰𝘨𝘳𝘢𝘮𝘴. 𝘈𝘸𝘢𝘬𝘦𝘯 𝘺𝘰𝘶𝘳 𝘪𝘯𝘯𝘦𝘳 𝘞𝘪𝘴𝘥𝘰𝘮🌻 -->

          <i>Join Llama's programs, Awaken your inner Wisdom</i>🌻
        </a>
      </p>
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
  /* background-color: #f07812; */
  text-align: center;
  margin-top: 1vh;
  font-size: 1rem;
  font-family: sans-serif;
  /* height: 10vh; */
}

/* .new_footer {
  padding: 5px;
} */

.website {
  text-decoration: underline;
  color: #000000;
}

.logo {
  font-size: 1.2rem;
}

.link-text {
  color: #000000;
  cursor: pointer;
  margin: 0 10px;
}

a {
  color: #000000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #000000;
}
.privacy-policy-content {
  text-align: justify;
  padding: 10px;
}
span {
  font-weight: bold;
  color: black;
}
ul {
  text-align: justify;
  margin: auto;
  width: 90%;
  padding: 10px;
}

ul.custom-bullet {
  list-style-type: none; /* Remove the default bullet point */
}

ul.custom-bullet li::before {
  content: "✔ "; /* Add tick mark before each list item */
  color: green; /* Change color of tick mark */
  font-weight: bold; /* Make the tick mark bold */
}
@media (max-width: 767px) {
  .new_footer {
    margin-top: 2vh;
    font-size: 13.5px;
    color: #000000;
    padding: 5px;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  .new_footer::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 3px;
    width: 100%;
    background-color: orange;
  }
}
</style>
