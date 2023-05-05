<template>
  <footer class="footer">
    <strong>Powered by Llama</strong>
    <br />
    <p>
      This is a research project, might give incorrect and irrelevant answers
      sometimes. <br />
      <br />
      Visit our website: <a href="https://www.myllama.co">www.myllama.co</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  background-color: #f3c460;
  color: #fcf7ee;
  padding: 1rem;
  text-align: center;
  margin-top: 25px;
}

a {
  color: #fcf7ee;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
