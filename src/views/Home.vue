<template>
  <div class="home">
      <div class="container">
        <MovieCard
          v-for="movie in movieList"
          :key="movie.id"
          :movieDetails="movie"
          @reload="fetchMovies"/>
      </div>
  </div>
</template>

<script>
import MovieCard from '@/components/ImageCard.vue'
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    MovieCard
  },
  data() {
    return {
      searchItem: '',
      movieList: []
    }
  },
  mounted() {
    this.fetchMovies()
  },
  methods: {
    fetchMovies() {
      this.$http.get('http://localhost:3000/movies')
      .then(response => {
        this.movieList = response.data
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>
