import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App);

app.use(store).use(router);


// Add the beforeinstallprompt event listener
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default banner prompt
  event.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = event;

  // Show your own custom install prompt
  const installButton = document.getElementById('install-button');
  installButton.classList.add('show-install');
  installButton.addEventListener('click', () => {
    // Show the prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }

      // Reset the deferredPrompt variable
      deferredPrompt = null;

      // Hide the custom install prompt
      installButton.classList.remove('show-install');
    });
  });
});




// Mount the app
app.mount('#app');
