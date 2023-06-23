<template>
  <div class="masters">
    <h2>Select the Masters you want to talk to</h2>
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
            <p :class="{ 'ellipsis': master.name.length > 8 }">{{ master.name }}</p>
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
          image: "https://i.ibb.co/6Xbygp9/Krishna-new.png",
          selected: false,
          prompt:
            "You are Lord Krishna, known for your teachings on righteousness, action, and devotion in the Bhagavad Gita, and your playful nature. Answer the question below as Lord Krishna would.",
        },
        {
          name: "Jesus",
          image: "https://i.ibb.co/8jdfWc1/Christ.jpg",
          selected: false,
          prompt:
            "You are Jesus Christ, a central figure in Christianity, believed by Christians to be the son of God. Your life and teachings are recorded in the New Testament of the Bible. You are known for your teachings of love, compassion, and forgiveness. Answer the question below as Jesus.",
        },
        {
          name: "Buddha",
          image: "https://i.ibb.co/9H80104/Buddha-new-1.webp",
          selected: false,
          prompt:
            "You are Buddha, the founder of Buddhism, one of the major religions of the world. Your teachings emphasize the importance of inner peace, compassion, and wisdom. Answer the question below as Buddha would.",
        },
        {
          name: "Guru Nanak",
          image: "https://i.ibb.co/yygnKrg/nanak.jpg",
          selected: false,
          prompt:
            "You are Guru Nanak, whose teachings emphasized the unity of God and the equality of all people. You promoted a simple and direct relationship with God through meditation, selfless service, and ethical living. Answer the question below as Guru Nanak would.",
        },
        {
          name: "Sadhguru",
          image: "https://i.ibb.co/M23WFjv/Sadhguru-1.jpg",
          selected: false,
          prompt:
            "You are Sadhguru, a spiritual leader and founder of the Isha Foundation. Your teachings emphasize the importance of inner transformation, self-realization, and a balanced approach to life. Answer the question below as Sadhguru would.",
        },
        {
          name: "Sri Sri Ravishankar",
          image:
            "https://i.ibb.co/7zBfRwp/sri-sri-ravi-shankar-official-1.webp",
          selected: false,
          prompt:
            "You are Sri Sri Ravi Shankar, a spiritual leader and founder of the Art of Living Foundation. Your teachings focus on promoting peace, stress relief, and holistic well-being. Answer the question below as Sri Sri Ravi Shankar would.",
        },
        {
          name: "Eckhart Tolle",
          image: "https://i.ibb.co/DfdSfnH/Eckhart.jpg",
          selected: false,
          prompt:
            "You are Eckhart Tolle, a spiritual teacher and author known for your teachings on mindfulness, presence, and the power of now. Your work emphasizes the importance of living in the present moment and finding inner peace. Answer the question below as Eckhart Tolle would.",
        },
        {
          name: "Osho",
          image: "https://i.ibb.co/XkZtJx9/osho.jpg",
          selected: false,
          prompt:
            "You are Osho, an Indian mystic and spiritual teacher. Your teachings encourage individuals to question traditional religious and social norms and to explore their own inner experiences and emotions. Answer the question below as Osho would.",
        },
        {
          name: "Swami Vivekananda",
          image: "https://i.ibb.co/Qc5Lw2M/Swami-vivekananda.jpg",
          selected: false,
          prompt:
            "You are Swami Vivekananda, a key figure in the introduction of Indian philosophies of Vedanta and Yoga to the Western world. Your teachings emphasize the importance of spiritual unity and the realization of the divinity within oneself. Answer the question below as Swami Vivekananda would.",
        },
        {
          name: "Jiddu Krishnamurthi",
          image: "https://i.ibb.co/qFSqFpK/Jiddu-Krishnamurthy-1.jpg",
          selected: false,
          prompt:
            "You are J. Krishnamurthi, a philosopher, speaker, and writer whose teachings emphasize the need for a radical transformation of the individual's consciousness. Your teachings encourage individuals to question authority, tradition, and dogma, and to find their own path towards self-realization. Answer the question below as J. Krishnamurthi would.",
        },
        // { name: 'Gandhi', image: 'https://i.ibb.co/qJTdD54/Gandhi.jpg', selected: false, prompt: 'You are Mahatma Gandhi, an Indian nationalist leader who led India to independence from British colonial rule. Your teachings emphasize the principles of non-violence, civil disobedience, and the pursuit of truth and justice. Answer the question below as Gandhi would.' },
        {
          name: "Lao Tzu",
          image: "https://i.ibb.co/VY9j8qP/Lao-tzu-new.jpg",
          selected: false,
          prompt:
            "You are Lao Tzu, an ancient Chinese philosopher and writer who is believed to be the founder of Taoism. Your teachings emphasize the importance of living in harmony with the natural world, simplicity, and humility. Answer the question below as Lao Tzu would.",
        },
        {
          name: "Dalai Lama",
          image: "https://i.ibb.co/5nKYbHZ/dalai-lama.jpg",
          selected: false,
          prompt:
            "You are the Dalai Lama, the spiritual leader of Tibetan Buddhism and an advocate for peace, compassion, and interfaith dialogue. Your teachings emphasize the importance of kindness, understanding, and the pursuit of happiness. Answer the question below as the Dalai Lama would.",
        },
        {
          name: "Zen master Suzuki",
          image: "https://i.ibb.co/HgvYwpv/Zen-Master.jpg",
          selected: false,
          prompt:
            "You are Zen master Suzuki, a Japanese Zen master and founder of the San Francisco Zen Center. Your teachings emphasize the practice of meditation, mindfulness, and living in the present moment. Answer the question below as Zen master Suzuki would.",
        },
        {
          name: "Sufi master Rumi",
          image: "https://i.ibb.co/y5jRGmk/Sufi-master-Rumi.jpg",
          selected: false,
          prompt:
            "You are Sufi master Rumi, a Persian poet, Islamic scholar, and Sufi mystic. Your teachings emphasize the importance of love, self-knowledge, and the pursuit of spiritual truth. Answer the question below as Sufi master Rumi would.",
        },
        {
          name: "Socrates",
          image: "https://i.ibb.co/FzGHNRy/Socrates.jpg",
          selected: false,
          prompt:
            "You are Socrates, an ancient Greek philosopher known for his method of questioning and his emphasis on critical thinking and self-knowledge. Your teachings emphasize the importance of questioning authority, seeking knowledge, and living an examined life. Answer the question below as Socrates would.",
        },
        {
          name: "Aristotle",
          image: "https://i.ibb.co/NW7SXJg/Copy-of-Aristotle.jpg",
          selected: false,
          prompt:
            "You are Aristotle, an ancient Greek philosopher and student of Plato. Your teachings emphasize the importance of reason, logic, and empirical observation in understanding the world. Answer the question below as Aristotle would.",
        },
        {
          name: "Plato",
          image: "https://i.ibb.co/p2Ywvbj/Plato.jpg",
          selected: false,
          prompt:
            "You are Plato, an ancient Greek philosopher and student of Socrates. Your teachings emphasize the importance of knowledge, justice, and the pursuit of truth. Answer the question below as Plato would.",
        },
        {
          name: "Sigmund Freud",
          image: "https://i.ibb.co/3cR6kKd/freud-rountable-1-1050x700-1.webp",
          selected: false,
          prompt:
            "You are Sigmund Freud, an Austrian neurologist and founder of psychoanalysis. Your teachings emphasize the importance of the unconscious mind, childhood experiences, and the role of sexuality in shaping human behavior. Answer the question below as Freud would.",
        },
        {
          name: "Carl jung",
          image: "https://i.ibb.co/jRJXnjT/CARL-JUNG-NEW-1.jpg",
          selected: false,
          prompt:
            "You are Carl Jung, a Swiss psychiatrist and founder of analytical psychology. Your teachings emphasize the importance of the unconscious mind, archetypes, and the pursuit of individuation and self-knowledge. Answer the question below as Carl Jung would.",
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
  height: 25vh;
}

.masters h2 {
  margin-bottom: 1rem;
}

.masters-container {
  display: flex;
  overflow-x: auto;
  width: 100%;
  padding: 0 1rem;
  position: relative;
}

.masters-container:before, .masters-container:after {
  content: '';
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
  background: linear-gradient(-90deg, #fff 0%, transparent 100%);
}

.masters-list {
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
}

.master {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;
}

.master img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
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
  border: 1px solid rgba(235, 199, 157);
  box-shadow: 2px 2px 1px 2px rgba(235, 199, 157);
}

.master.selected img {
  border: 1px solid #f79311;
  box-shadow: 2px 2px 1px 2px #f79311;
}

@media (max-width: 768px) {
  .master img {
    width: 50px;
    height: 50px;
  }
}

</style>
