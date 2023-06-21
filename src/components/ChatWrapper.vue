<template>
    <div class="chat-wrapper">
      <transition name="component-fade" mode="out-in">
        <Masters
          v-show="!isChatVisible"
          :modelValue="selectedMasters"
          @update:modelValue="updateSelectedMasters"
        />
        <Chatbox
          v-show="isChatVisible"
          :selectedMasters="selectedMasters"
          :selectedMastersCount="selectedMasters.length"
        />
      </transition>
      <div class="swap-icon" @click="swapComponents">
        <i :class="isChatVisible ? 'fa fa-arrow-down' : 'fa fa-arrow-right'"></i>
        {{ isChatVisible ? "Select Master" : "Start Chatting" }}
      </div>
    </div>
  </template>
  
  <script>
  import Masters from "./Masters.vue";
  import Chatbox from "./Chatbox.vue";
  
  export default {
    components: {
      Masters,
      Chatbox,
    },
    data() {
      return {
        isChatVisible: false,
        selectedMasters: [],
      };
    },
    methods: {
      swapComponents() {
        this.isChatVisible = !this.isChatVisible;
      },
      updateSelectedMasters(newMasters) {
        this.selectedMasters = newMasters;
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .swap-icon {
    cursor: pointer;
    margin: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f8f8f8;
  }
  
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }
  </style>
  