<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"></slot>
        <button type="button" class="btn-close" @click="close">x</button>
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
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
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

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  color: #666666;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
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
}

.btn-yellow:hover {
  letter-spacing: 3px;
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
