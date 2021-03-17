<template>
  <div
    v-editable="blok"
    :style="{backgroundColor: blok.backgroundColor.color, minHeight: blok.pixelHeight + 'px'}"
    class="flex flex-row flex-wrap-reverse max-w-full space-x-24 p-10 items-center"
  >
    <div class="content-image">
      <img :src="blok.image.filename" :alt="blok.altText" />
    </div>
    <div class="content flex flex-col space-y-8">
      <h3 class="text-4xl text-center font-bold">{{ blok.headline }}</h3>
      <p class="text-center text-xl">{{ blok.description }}</p>
      <p class="text-center">{{ blok.content }}</p>
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
}

.content-image {
  max-width: 400px;
  margin: auto;
}

.content {
  max-width: 500px;
  padding-bottom: 30px;
}

.flex {
  margin: auto;
}

.button {
    max-width: 200px;
    align-self: center;
}
</style>
