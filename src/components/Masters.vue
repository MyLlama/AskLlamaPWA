<template>
  <div class="masters">
    <h2>Select a Master</h2>
    <select v-model="selectedMasters" multiple>
        <option v-for="(master, index) in masters" :key="index" :value="master">{{ master.name }}</option>
    </select>
    <div class="master-grid">
      <img
        v-for="(master, index) in masters"
        :key="index"
        :src="master.image"
        :alt="master.name"
        @click="selectMaster(master)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LlamaMasters',
  data() {
    return {
        masters: [
            {
                name: 'Krishna',
                image: 'https://i.ibb.co/zRscGNV/Krishna.jpg',
            },
            {
                name: 'Jesus',
                image: 'https://i.ibb.co/8jdfWc1/Christ.jpg',
            },
            {
                name: 'Carl Jung',
                image: 'https://i.ibb.co/NYGc6J4/Gustav-Jung-1.jpg',
            },
        ],
    };
  },
  props: {
    modelValue: Array,
  },
  emits: ['update:modelValue'],
  watch: {
    selectedMasters: {
      handler(newVal) {
        this.$emit('update:modelValue', newVal);
      },
      immediate: true,
    },
  },
  methods: {
    selectMaster(master) {
    console.log('Master selected:', master);
    this.$emit('master-selected', master);
  },
  },
};
</script>

<style scoped>
.master-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 1rem;
}

img {
  width: 100%;
  height: auto;
  cursor: pointer;
}
.masters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.master {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.master-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}
</style>
