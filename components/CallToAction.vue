<template>
    <div class="cto-image" v-editable="blok" :style="{ backgroundImage: `url(${blok.image.filename})` }">
  <div class="cto-content flex flex-col space-y-8">
    <h4 class="text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900">{{blok.text}}</h4>
    <button
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
        >
            <nuxt-link :to="{path: blok.buttonLink}">
          {{ blok.buttonText }}
          </nuxt-link>
        </button>
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
.cto-image {
  box-shadow:inset 0 0 0 2000px #e2e8f0ab;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 380px;
}

.cto-content {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  min-width: 350px;
  align-items: center;
}

button {
    max-width: 200px;
    background-color: darkslategray;
}
</style>