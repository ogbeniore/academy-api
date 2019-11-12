<template>
  <div class="movie_card">
    <div class="movie_card_image">
      <img :src="movieDetails.Url" :alt="movieDetails.Name+movieDetails.Type">
    </div>
    <div class="movie_card_content">
      <h3>{{ movieDetails.Name }}</h3>
      <p>{{ movieDetails.Type }}</p>
      <div class="d-flex">
        <button @click="viewItem">View</button>
        <button>Edit</button>
        <button @click="deleteItem">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieDetails: Object,
  },
  methods: {
    deleteItem() {
      this.$http.delete(`http://localhost:3000/movies/${this.movieDetails.id}`)
        .then(response => {
          alert('Movie Deleted Successfully')
          console.log(response)
          this.$emit('reload')
        })
        .catch(error => {
          alert('Error Deleting Movie')
          console.log(error.response)
        })
    },
    viewItem() {
      this.$router.push({name: 'view-movie', params: { id: this.movieDetails.id}})
    }
  }
}
</script>

<style scoped>
.movie_card {
  max-width: 100%;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
}
.movie_card_image {
  max-height: 200px;
  width: 100%;
  overflow: hidden;
}
.movie_card_image:hover > img {
  filter: grayscale(0);
  cursor: pointer;
}
img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: grayscale(0.5);
  transition: all 300ms ease-in-out;
}
.movie_card_content {
  text-align: left;
  border-top: 2px solid blueviolet;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
h3 {
  font-weight: 800;
  color: blueviolet;
}
h3, p {
  padding: 0 1rem; 
}
button {
  width: 100%;
  border: none;
  padding: 1rem;
  background: blueviolet;
  color: #ffffff;
  margin-top: auto;
  cursor: pointer;
}
button:hover {
  filter: grayscale(0.5);
}
.d-flex {
  display: flex;
}
</style>