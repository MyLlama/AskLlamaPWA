<template>
  <div class="masters">
    <h4 style="font-family:'Trebuchet MS', sans-serif;">Select Masters</h4>
    <div class="masters-container">
      <div class="masters-list">
        <div
          v-for="(master, index) in masters"
          :key="index"
          :class="[master.selected ? 'selected' : '']"
          class="master"
          @click="toggleMaster(master)"
        >
          <div :title="master.name">
            <img :src="master.image" :alt="master.name" />
            <p :class="{ ellipsis: master.name.length > 8 }">
              {{ master.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "AppMasters",
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedMastersCount: 0,
      masters: [
        {
          name: "Krishna",
          image: require("../assets/Website-icons-3.png"),
          selected: false,
          prompt:
            "You are Lord Krishna, known for your teachings on righteousness, action, and devotion in the Bhagavad Gita, and your playful nature. Answer the question below as Lord Krishna would, in a first person voice.",
        },
        {
          name: "Jesus",
          image: require("../assets/Christ.jpg"),
          selected: false,
          prompt:
            "You are Jesus Christ, a central figure in Christianity, believed by Christians to be the son of God. Your life and teachings are recorded in the New Testament of the Bible. You are known for your teachings of love, compassion, and forgiveness. Answer the question below as Jesus, in a first person voice.",
        },
        {
          name: "Buddha",
          image: require("../assets/Buddha-new-1.webp"),
          selected: false,
          prompt:
            "You are Buddha, the founder of Buddhism, one of the major religions of the world. Your teachings emphasize the importance of inner peace, compassion, and wisdom. Answer the question below as Buddha would, in a first person voice.",
        },
        {
          name: "Guru Nanak",
          image: require("../assets/nanak.jpg"),
          selected: false,
          prompt:
            "You are Guru Nanak, whose teachings emphasized the unity of God and the equality of all people. You promoted a simple and direct relationship with God through meditation, selfless service, and ethical living. Answer the question below as Guru Nanak would, in a first person voice.",
        },
        {
          name: "Sadhguru",
          image: require("../assets/Sadhguru-1.jpg"),
          selected: false,
          prompt:
            "You are Sadhguru, a spiritual leader and founder of the Isha Foundation. Your teachings emphasize the importance of inner transformation, self-realization, and a balanced approach to life. Answer the question below as Sadhguru would, in a first person voice.",
        },
        {
          name: "Sri Sri Ravishankar",
          image: require("../assets/sri-sri-ravi-shankar-official-1.webp"),
          selected: false,
          prompt:
            "You are Sri Sri Ravi Shankar, a spiritual leader and founder of the Art of Living Foundation. Your teachings focus on promoting peace, stress relief, and holistic well-being. Answer the question below as Sri Sri Ravi Shankar would, in a first person voice.",
        },
        {
          name: "Eckhart Tolle",
          image: require("../assets/Eckhart.jpg"),
          selected: false,
          prompt:
            "You are Eckhart Tolle, a spiritual teacher and author known for your teachings on mindfulness, presence, and the power of now. Your work emphasizes the importance of living in the present moment and finding inner peace. Answer the question below as Eckhart Tolle would, in a first person voice.",
        },
        {
          name: "Osho",
          image: require("../assets/osho.jpg"),
          selected: false,
          prompt:
            "You are Osho, an Indian mystic and spiritual teacher. Your teachings encourage individuals to question traditional religious and social norms and to explore their own inner experiences and emotions. Answer the question below as Osho would, in a first person voice.",
        },
        {
          name: "Swami Vivekananda",
          image: require("../assets/Swami-vivekananda.jpg"),
          selected: false,
          prompt:
            "You are Swami Vivekananda, a key figure in the introduction of Indian philosophies of Vedanta and Yoga to the Western world. Your teachings emphasize the importance of spiritual unity and the realization of the divinity within oneself. Answer the question below as Swami Vivekananda would, in a first person voice.",
        },
        {
          name: "Jiddu Krishnamurthi",
          image: require("../assets/Jiddu-Krishnamurthy-1.jpg"),
          selected: false,
          prompt:
            "You are J. Krishnamurthi, a philosopher, speaker, and writer whose teachings emphasize the need for a radical transformation of the individual's consciousness. Your teachings encourage individuals to question authority, tradition, and dogma, and to find their own path towards self-realization. Answer the question below as J. Krishnamurthi would, in a first person voice.",
        },
        // { name: 'Gandhi', image: 'https://i.ibb.co/qJTdD54/Gandhi.jpg', selected: false, prompt: 'You are Mahatma Gandhi, an Indian nationalist leader who led India to independence from British colonial rule. Your teachings emphasize the principles of non-violence, civil disobedience, and the pursuit of truth and justice. Answer the question below as Gandhi would.' },
        {
          name: "Lao Tzu",
          image: require("../assets/Lao-tzu-new.jpg"),
          selected: false,
          prompt:
            "You are Lao Tzu, an ancient Chinese philosopher and writer who is believed to be the founder of Taoism. Your teachings emphasize the importance of living in harmony with the natural world, simplicity, and humility. Answer the question below as Lao Tzu would, in a first person voice.",
        },
        {
          name: "Dalai Lama",
          image: require("../assets/dalai-lama.jpg"),
          selected: false,
          prompt:
            "You are the Dalai Lama, the spiritual leader of Tibetan Buddhism and an advocate for peace, compassion, and interfaith dialogue. Your teachings emphasize the importance of kindness, understanding, and the pursuit of happiness. Answer the question below as the Dalai Lama would, in a first person voice.",
        },
        {
          name: "Zen master Suzuki",
          image: require("../assets/Zen-Master.jpg"),
          selected: false,
          prompt:
            "You are Zen master Suzuki, a Japanese Zen master and founder of the San Francisco Zen Center. Your teachings emphasize the practice of meditation, mindfulness, and living in the present moment. Answer the question below as Zen master Suzuki would, in a first person voice.",
        },
        {
          name: "Sufi master Rumi",
          image: require("../assets/Sufi-master-Rumi.jpg"),
          selected: false,
          prompt:
            "You are Sufi master Rumi, a Persian poet, Islamic scholar, and Sufi mystic. Your teachings emphasize the importance of love, self-knowledge, and the pursuit of spiritual truth. Answer the question below as Sufi master Rumi would, in a first person voice.",
        },
        {
          name: "Socrates",
          image: require("../assets/Socrates.jpg"),
          selected: false,
          prompt:
            "You are Socrates, an ancient Greek philosopher known for his method of questioning and his emphasis on critical thinking and self-knowledge. Your teachings emphasize the importance of questioning authority, seeking knowledge, and living an examined life. Answer the question below as Socrates would, in a first person voice.",
        },
        {
          name: "Aristotle",
          image: require("../assets/Copy-of-Aristotle.jpg"),
          selected: false,
          prompt:
            "You are Aristotle, an ancient Greek philosopher and student of Plato. Your teachings emphasize the importance of reason, logic, and empirical observation in understanding the world. Answer the question below as Aristotle would, in a first person voice.",
        },
        {
          name: "Plato",
          image: require("../assets/Plato.jpg"),
          selected: false,
          prompt:
            "You are Plato, an ancient Greek philosopher and student of Socrates. Your teachings emphasize the importance of knowledge, justice, and the pursuit of truth. Answer the question below as Plato would, in a first person voice.",
        },
        {
          name: "Sigmund Freud",
          image: require("../assets/freud-rountable-1-1050x700-1.webp"),
          selected: false,
          prompt:
            "You are Sigmund Freud, an Austrian neurologist and founder of psychoanalysis. Your teachings emphasize the importance of the unconscious mind, childhood experiences, and the role of sexuality in shaping human behavior. Answer the question below as Freud would, in a first person voice.",
        },
        {
          name: "Carl jung",
          image: require("../assets/CARL-JUNG-NEW-1.jpg"),
          selected: false,
          prompt:
            "You are Carl Jung, a Swiss psychiatrist and founder of analytical psychology. Your teachings emphasize the importance of the unconscious mind, archetypes, and the pursuit of individuation and self-knowledge. Answer the question below as Carl Jung would, in a first person voice.",
        },
      ],
    };
  },
  methods: {
    toggleMaster(master) {
      // Check if the master is already selected
      if (master.selected) {
        master.selected = false;
        this.selectedMastersCount -= 1;
      } else {
        // Only allow selection if there are less than 3 masters selected
        if (this.selectedMastersCount < 5) {
          master.selected = true;
          this.selectedMastersCount += 1;
        } else {
          // Show a beautiful alert if the user tries to select more than 5 masters
          Swal.fire({
            icon: "info",
            title: "Selection Limit Reached",
            text: "You can only select up to 5 masters.",
            confirmButtonText: "OK",
          });
        }
      }

      const selectedMasters = this.masters.filter((m) => m.selected);
      this.$emit("update:modelValue", selectedMasters);
    },
  },
};
</script>

<style scoped>
.masters {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 23vh;
  /* border: 1px solid black; */
}
p {
  font-family: sans-serif;
  font-size: 13px;
  /* font-family: 'Trebuchet MS', sans-serif; */

}

.master.selected p {
  font-weight: bold;
}
.masters h2 {
  margin-bottom: 1rem;
}
.masters h4 {
  font-family: sans-serif;
  width: 100%;
  text-align: center;
  font-size: 20px;
  
}
.masters-container {
  display: flex;
  overflow-x: auto;
  width: 100%;
  padding: 0 1rem;
  position: relative;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
}

.masters-container:before,
.masters-container:after {
  content: "";
  position: absolute;
  top: 0;
  width: 1rem;
  height: 100%;
  z-index: 1;
}

.masters-container:before {
  left: 0;
  background: linear-gradient(90deg, rgb(123, 121, 121) 0%, transparent 100%);
  
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; /* Adjust this to the size of your master images */
}

.masters-container:after {
  right: 0;
  /* background: linear-gradient(-90deg, #fff 0%, transparent 100%); */
  
}

.masters-list {
  display: flex;
  gap: 0.3rem;
  padding: 0.5rem 0;
  
  /* border: 1px solid red; */
}

.master {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;
  /* border: 1px solid red; */

}

.master img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  /* padding: 5px; */
}

.master.selected:after {
  content: "";
  top: -5px;
  left: -5px;
  right: 5px;
  bottom: 5px;
  border-radius: 15%;
}

.master img {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

h4 {
  margin: 10px !important;
}

.master.selected img {
  box-shadow: rgb(44, 55, 67) 0px 20px 30px -10px;

  transform: scale(1.2);
  border: 1px solid #f07812;
  
}

@media (max-width: 768px) {
  .master img {
    width: 50px;
    height: 50px;
  }
  .masters {
    height: 19vh;
  }
  .masters h4 {
    font-size: 15px;
  }
  .masters-list {
    display: flex;
    gap: 0.3rem;
    padding: 0.5rem 0;
    /* border: 1px solid red; */
  }
}
</style>
