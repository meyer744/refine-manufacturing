<template>
  <div class="hero-container" v-editable="blok" :style="{ backgroundImage: `url(${blok.image.filename})` }">
    <main
      class="mt-10 mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <div class="sm:text-center lg:text-left">
        <h1
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span class="block xl:inline text-white">{{ blok.headline1 }}</span>
          <span class="block text-orange-400 xl:inline">{{
            blok.headline2
          }}</span>
        </h1>
        <p
          class="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
          {{ blok.description }}
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              href="#"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-orange-200 hover:bg-orange-100 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </main>
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
.hero-container {
  box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 21%);
  min-height: 580px; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
}
</style>