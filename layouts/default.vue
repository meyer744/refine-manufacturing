<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
  </div>
</template>
<script>
import NavBar from './NavBar.vue';
export default {
  components: { NavBar },
}
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
</style>
