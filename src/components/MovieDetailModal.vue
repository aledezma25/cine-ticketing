<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          @click="$emit('close')"
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img :src="movie.image" alt="Movie Poster" class="w-full max-h-60 object-cover rounded-lg mb-4" />
        <h2 class="text-2xl font-semibold mb-2">{{ movie.title }}</h2>
        <p class="text-gray-600">{{ movie.year }}</p>
        <p class="text-gray-800 mt-2">{{ movie.description }}</p>
        <p class="text-gray-600 mt-2">Rating: {{ movie.rating }}</p>
        <button
          @click="$emit('showForm')"
          class="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Comprar Tiquete
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieDetailModal',
    props: {
      visible: Boolean,
      movie: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  