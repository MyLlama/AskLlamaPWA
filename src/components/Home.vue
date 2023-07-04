<template>
  <div>
    <Masters @update:modelValue="selectMaster" />
    <Chatbox :selectedMasters="selectedMasters" :selectedMastersCount="selectedMasters.length" />

   
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
