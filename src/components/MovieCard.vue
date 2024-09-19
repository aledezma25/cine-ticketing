<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <img :src="movie.image" alt="Movie Poster" class="w-full h-auto rounded-lg mb-4" />
    <h2 class="text-xl font-semibold mb-2">{{ movie.title }}</h2>
    <p class="text-gray-600">{{ movie.year }}</p>
    <button
      @click="viewDetails"
      class="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
    >
      Ver Detalles
    </button>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  methods: {
    viewDetails() {
      this.$emit('select', this.movie);
    },
  },
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
