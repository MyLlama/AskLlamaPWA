<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="logo">
        <strong>Powered by Llama</strong>
      </div>
      <div class="disclaimer">
        <p>
          This is a research project, might give incorrect and irrelevant answers
          sometimes.
        </p>
      </div>
      <div class="website">
        Visit our website: <a href="https://www.myllama.co">www.myllama.co</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  background-color: #f3c460; /* Updated background color */
  color: #ffffff; /* Updated text color */
  text-align: center;
  margin-top: 25px;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 1.2rem;
}

a {
  color: #ffffff; /* Updated link color */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

