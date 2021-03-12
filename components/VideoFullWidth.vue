<template>
<div  v-editable="blok" class="bg-white">
<video width="100%" height="240px" autoplay muted>
  <source :src="blok.video.filename" type="video/mp4">
</video>
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
div {
  line-height: 0;
}
video {
    position: relative;
    border: none;
    object-fit: cover;
    outline: none;
    border: none;
    box-shadow: none;
    overflow: hidden;
    max-height: 350px;
}
</style>