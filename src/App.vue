<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <AppNavbar />
    <main class="flex-grow container mx-auto p-4">
      <MoviesList />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import MoviesList from './components/MoviesList.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    MoviesList
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  color: #333;
}
</style>
