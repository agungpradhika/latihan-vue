<template>
  <img class="image" src="./assets/logo.png">
  <div>
    <router-link to="/">Form Login</router-link> |
    <router-link to="/table">Form Table</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
.image {
  max-width: 15%;
}
</style>
