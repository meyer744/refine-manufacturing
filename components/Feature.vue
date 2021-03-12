<template>
  <div
    v-editable="blok"
    class="py-2 text-center feature">
    <font-awesome-icon :key="blok.icon" class="feature-icon" :icon="blok.icon" />
    <!-- <img
      class="mx-auto"
      :src="blok.icon"> -->
    <h1 class="text-lg">{{ blok.name }}</h1>
    <p class="text-gray-600">
      {{ blok.description }}
    </p>
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
.feature-icon {
    font-size: 70px;
    margin: 25px;
}

.feature {
    margin: auto;
}
</style>
