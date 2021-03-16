<template>
<div v-editable="blok" :style="{backgroundColor: blok.backgroundColor.color}">
  <ul
    class="flex justify-center flex-wrap py-8 mb-6 max-w-screen-xl align-cener">
    <li
      :key="blok._uid"
      v-for="blok in blok.columns"
      class="flex-auto px-6 max-w-sm">
      <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.flex {
    margin: auto;
}
</style>