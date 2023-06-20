<template>
  <div>
    
    <div v-show="val==='all' || val==='master'"><app-masters v-model="selectedMasters"></app-masters></div>
    <button class="button-5" @click="handleSwap"> 
      {{ val==="master" ? 'Open Chat Box' : (val === "chat" ? 'Select Masters' : '')  }}
      Select Masters</button>
    <div v-show="val==='all' || val==='chat'"><app-chatbox
      :selected-masters="selectedMasters"
      :selectedMastersCount="selectedMasters.length" 
    ></app-chatbox></div>
    
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />
    

    
  </div>
</template>

<script>
import AppMasters from '@/components/Masters.vue';
import AppChatbox from '@/components/Chatbox.vue';
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const awesome = ref(true);

export default {
  name: 'HomePage',
  components: {
    AppMasters,
    AppChatbox,
    Modal
  },
  mounted() {
  this.showModal();
},
  data() {
    
    return {
      isModalVisible: false,
      awesome: false,
      val: 'all',
      selectedMasters: [],
    };
  },
  methods: {
    showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    handleSwap() {
      this.isActive = !this.isActive;
      if(this.val==="all" || this.val==="chat") this.val = "master";
      else if(this.val==="all" || this.val==="master") this.val = "chat";
    },

  }
};
</script>

<style>
@media only screen and (min-width: 600px) {
  .button-5{
    display: none;
  }

}

/* CSS */
.button-5 {
  align-items: center;
  margin-top: 3%;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  /* display: inline-flex; */
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-5:hover,
.button-5:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-5:hover {
  transform: translateY(-1px);
}

.button-5:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}
</style>