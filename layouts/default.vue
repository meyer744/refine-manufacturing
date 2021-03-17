<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
    <footer-section></footer-section>
    <bottom-bar></bottom-bar>
  </div>
</template>
<script>
import NavBar from './NavBar.vue';
import FooterSection from './FooterSection.vue';
import BottomBar from './BottomBar.vue'
export default {
  components: { NavBar, FooterSection, BottomBar },
}
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

* { overflow: auto;
}
</style>
