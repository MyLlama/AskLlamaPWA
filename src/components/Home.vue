<template>
  <div>
    <div v-if="showMasters">
      <Masters @update:modelValue="selectMaster" />
      <div class="swap-section" @click="swapVisibility">
        <i class="fa" :class="[showMasters ? 'fa-chevron-down' : 'fa-chevron-up']"></i>
        <span>Start Chatting</span>
      </div>
    </div>
    <div v-else>
      <Chatbox :selectedMasters="selectedMasters" :selectedMastersCount="selectedMasters.length" />
      <div class="swap-section" @click="swapVisibility">
        <i class="fa" :class="[showMasters ? 'fa-chevron-down' : 'fa-chevron-up']"></i>
        <span>Select Master</span>
      </div>
    </div>
  </div>
</template>

<script>
import Masters from './Masters.vue';
import Chatbox from './Chatbox.vue';

export default {
  name: 'Home',
  components: {
    Masters,
    Chatbox,
  },
  data() {
    return {
      selectedMasters: [],
      showMasters: true,
    };
  },
  methods: {
    selectMaster(masters) {
      this.selectedMasters = masters;
    },
    swapVisibility() {
      this.showMasters = !this.showMasters;
    },
  },
};
</script>

<style scoped>
.swap-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  margin-down: 10px;
}
.swap-section span {
  margin-up: 5px; 
}
</style>
