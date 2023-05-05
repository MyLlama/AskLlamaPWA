<template>
  <div>
    <app-masters v-model="selectedMasters"></app-masters>
    <app-chatbox
      :selected-masters="selectedMasters"
      :selectedMastersCount="selectedMasters.length"
    ></app-chatbox>
  </div>
</template>

<script>
import AppMasters from '@/components/Masters.vue';
import AppChatbox from '@/components/Chatbox.vue';

export default {
  name: 'HomePage',
  components: {
    AppMasters,
    AppChatbox,
  },
  data() {
    return {
      selectedMasters: [],
    };
  },
};
</script>
