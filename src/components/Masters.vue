<template>
    <div class="masters">
      <h2>Select Masters:</h2>
      <div class="master-list">
        <div v-for="master in masters" :key="master.id" class="master-item">
          <input
            type="checkbox"
            :id="master.id"
            :value="master"
            v-model="selectedMasters"
            @change="updateSelectedMasters"
          />
          <label :for="master.id">{{ master.name }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppMasters',
    data() {
      return {
        masters: [
          {
            id: 1,
            name: 'Krishna',
            image: 'https://i.ibb.co/zRscGNV/Krishna.jpg',
          },
          {
            id:2,
            name: 'Jesus',
            image: 'https://i.ibb.co/8jdfWc1/Christ.jpg',
          },
          {
            id:3,
            name: 'Carl Jung',
            image: 'https://i.ibb.co/NYGc6J4/Gustav-Jung-1.jpg',
          },
        ],
        selectedMasters: [],
      };
    },
    props: {
      modelValue: Array,
    },
    emits: ['update:modelValue'],
    methods: {
      selectMaster(master) {
        const index = this.selectedMasters.indexOf(master);
        if (index === -1) {
          this.selectedMasters.push(master);
        } else {
          this.selectedMasters.splice(index, 1);
        }
        this.$emit('update:modelValue', this.selectedMasters);
      },
      updateSelectedMasters() {
        this.$emit('update:selected-masters', this.selectedMasters);
      },
    },
  };
  </script>
  
  <style scoped>
  .masters {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .masters h2 {
    margin-bottom: 1rem;
  }
  
  .masters-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .master {
    position: relative;
    margin: 0.5rem;
  }
  
  .master img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
  
  .master.selected:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 5px solid #4DBA87;
    border-radius: 50%;
  }
  </style>
  