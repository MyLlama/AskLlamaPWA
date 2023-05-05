<template>
  <header class="header">
    <img
      class="header-logo"
      src="https://www.myllama.co/wp-content/uploads/2023/01/Llama-horizontal-aligned-logo.png"
      alt="Ask Llama"
    />
    <div class="header-text">
      <h1>Ask Llama</h1>
      <h2>Timeless Answers for Modern Problems</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.header {
  background-color: #f79311;
  color: white;
  display: flex;
  padding: 1rem;
  align-items: center;
}

.header-logo {
  width: 80px;
  height: auto;
  margin-right: 20px;
}

.header-text {
  text-align: left;
}

h1,
h2 {
  margin: 0;
}

h2 {
  font-size: 1rem;
  font-weight: normal;
}
</style>
