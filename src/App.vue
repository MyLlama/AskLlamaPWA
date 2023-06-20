<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <!-- <Carousel/> -->
      <router-view></router-view>
      <app-footer></app-footer>
      <!-- <llama-car></llama-car> -->
     
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
// import Carousel from './components/Carousel.vue'

// import LlamaCar from "./components/Carousel.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    // Carousel
  },
};
</script>

<style>
@import "@/install-button.css";
@import url("https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;500;600;700;800&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

html,
body {
  font-family: "Baloo Bhai 2", cursive;
}

.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}
@import "@/install-button.css";
</style>
