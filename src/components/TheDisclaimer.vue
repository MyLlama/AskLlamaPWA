<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="btn-close" @click="close">×</button>
        </header>

        <section class="modal-body">
          <slot name="body"></slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"></slot>
          <button type="button" class="btn-yellow" @click="close">Close</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 80%;
  z-index: 100;
  border: none;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(240, 120, 18, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  border-radius: 12px;
  height: 50vh;
  margin: 0 2vw;
}

.modal-header,
.modal-footer {
  background-color: #fcf7ee;
  color: white;
  padding: 0.7rem;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #666666;
  justify-content: center;
  text-align: center;
  font-size: 18px;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  color: #666666;
  flex-grow: 1;
  overflow-x: hidden;
  /* border: 3px solid black; */
  text-align: justify;
}

.modal-footer {
  background-color: #fcf7ee;

  padding: 15px;
  position: sticky;
  bottom: 0;
}

.btn-close {
  position: absolute;
  top: 1vw;
  right: 2vw;
  border: none;
  font-size:2rem;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #f79311;
  background: transparent;
}

.btn-yellow {
  color: white;
  background: #f79311;
  border: 1px solid #f79311;
  border-radius: 21px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  width: 110px;
  margin: auto;
}

.btn-yellow:hover {
  letter-spacing: 3px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active {
  animation: modal 0.5s ease-out;
}
.modal-fade-leave-active {
  animation: modal 0.5s ease-in reverse;
}
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>

<script>
export default {
  name: "DisclaimerModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
