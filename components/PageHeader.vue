<template>
    <div class="header-image" v-editable="blok" :style="{ backgroundImage: `url(${blok.image.filename})`, backgroundColor: blok.backgroundColor.color,   minHeight: blok.pixelHeight + 'px'}">
  <div class="header-title flex flex-col space-y-8 text-center">
    <h1 class="text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white">{{blok.title}}</h1>
  </div>
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
};
</script>
<style scoped>
.header-image {
  box-shadow:inset 0 0 0 2000px #545455ab;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.header-title {
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  min-width: 350px;
  align-items: center;
}
</style>