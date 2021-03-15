<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
    <footer-section></footer-section>
  </div>
</template>
<script>
import NavBar from './NavBar.vue';
import FooterSection from './FooterSection';
export default {
  components: { NavBar, FooterSection },
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
