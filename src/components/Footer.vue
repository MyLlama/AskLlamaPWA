<template>
    <footer class="footer">
      <p>
        This is a research project, might give incorrect and irrelevant answers
        sometimes. <br />
        Visit our website: <a href="https://www.myllama.co">www.myllama.co</a>
        <br />
        <strong>Powered by Llama</strong>
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
    background-color: #666666;
    color: #fcf7ee;
    padding: 1rem;
    text-align: center;
  }
  
  a {
    color: #fcf7ee;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  