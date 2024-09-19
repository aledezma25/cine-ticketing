<template>
  <div class="p-4 bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Top 100 Películas</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <MovieCard
        v-for="movie in paginatedMovies"
        :key="movie.id"
        :movie="movie"
        @select="handleSelectMovie"
      />
    </div>
    <MovieDetailModal
      v-if="selectedMovie"
      :visible="!!selectedMovie"
      :movie="selectedMovie"
      @close="selectedMovie = null"
      @showForm="showTicketForm = true"
    />
    <TicketForm
      v-if="showTicketForm"
      :visible="showTicketForm"
      :movie="selectedMovie"
      @close="showTicketForm = false"
      @submit="handleTicketPurchase"
    />
    <div class="flex justify-center mt-8">
      <button
        class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out mr-2"
        :disabled="currentPage === 1"
        @click="previousPage"
      >
        Anterior
      </button>
      <button
        class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { getTopMovies } from '../services/movieService';
import MovieCard from './MovieCard.vue';
import MovieDetailModal from './MovieDetailModal.vue';
import TicketForm from './TicketForm.vue';

export default {
  name: 'MoviesList',
  components: {
    MovieCard,
    MovieDetailModal,
    TicketForm,
  },
  setup() {
    const movies = ref([]);
    const selectedMovie = ref(null);
    const showTicketForm = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = 8;

    const totalPages = computed(() => {
      return Math.ceil(movies.value.length / itemsPerPage);
    });

    const paginatedMovies = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return movies.value.slice(start, end);
    });

    onMounted(async () => {
      try {
        movies.value = await getTopMovies();
      } catch (error) {
        // Manejo de errores
      }
    });

    const handleSelectMovie = (movie) => {
      selectedMovie.value = movie;
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
      }
    };

    const handleTicketPurchase = (saleData) => {
      //Mensaje de exito 
      alert('Compra realizada');
      console.log('Compra realizada:', saleData);
    };

    return {
      movies,
      selectedMovie,
      showTicketForm,
      handleSelectMovie,
      previousPage,
      nextPage,
      paginatedMovies,
      totalPages,
      handleTicketPurchase,
    };
  },
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
