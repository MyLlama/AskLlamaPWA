<template>
  <header class="header">
    <div class="header-container">
      <img
        class="header-logo"
        src="https://www.myllama.co/wp-content/uploads/2023/01/LAMA-logo_Final-01.png"
        alt="Ask Llama"
      />
      <div class="header-text">
        <h1>Ask Llama</h1>
        <h2>Timeless Answers for Modern Problems</h2>
      </div>
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
  padding: 1rem;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
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

h1 {
  font-size: 2rem;
  margin-bottom: 0.2rem;
}

h2 {
  font-size: 20px;
  font-weight: normal;
}
</style>
