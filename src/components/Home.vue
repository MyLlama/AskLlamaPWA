<template>
    <div>
      <app-master v-model="selectedMasters"></app-master>
      <app-chatbox :selected-masters="selectedMasters"></app-chatbox>
    </div>
  </template>
  
  <script>
  import AppMaster from './Masters.vue';
  import AppChatbox from './Chatbox.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AppMaster,
      AppChatbox,
    },
    data() {
      return {
        selectedMasters: [],
      };
    },
  };
  </script>
  