<template>
  <div
    v-editable="blok"
    class="flex flex-row flex-wrap max-w-screen-xl space-x-24 items-center"
  >
    <div class="content-image">
      <img :src="blok.image.filename" :alt="blok.altText" />
    </div>
    <div class="content flex flex-col space-y-8">
      <h3 class="text-4xl text-center font-bold">{{ blok.headline }}</h3>
      <p class="text-center">{{ blok.description }}</p>
      <div class="button">
        <button
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
        >
           <nuxt-link :to="{path: blok.buttonLink}">
          {{ blok.buttonText }}
          </nuxt-link>
        </button>
      </div>
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
div {
  position: relative;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}

.content-image {
  max-width: 400px;
  margin: auto;
}

.content {
  max-width: 500px;
  padding: 0px 8px 0px 14px;
}

.flex {
  margin: auto;
}

.button {
    max-width: 200px;
    align-self: center;
}
</style>
