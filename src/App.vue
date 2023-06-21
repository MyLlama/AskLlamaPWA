<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
      <button id="install-button">Install</button>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
@import "@/install-button.css";
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


.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}
@import "@/install-button.css";
</style>
