<template>
  <div class="form">
    <h1>Edit {{ movie.Name }}</h1>
    <form @submit.prevent="submitMovie">
      <div class="form__item">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="e.g Men in Black" v-model="movie.Name">
      </div>
      <div class="form__item">
        <label for="type">Type</label>
        <select name="type" v-model="movie.Type">
          <option value="movie">Movie</option>
          <option value="music">Music</option>
        </select>
      </div>
      <div class="form__item">
        <label for="url">Image Url</label>
        <input type="url" name="url" placeholder="http://instagram.com/instagram" v-model="movie.Url">
      </div>
      <button class="form_button" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditMovie',
  data() {
    return {
      movie: {
        Name: '',
        Url: '',
        Type: ''
      }
    }
  },
  mounted() {
    this.$http.get(`http://localhost:3000/movies/${this.$route.params.id}`)
      .then(response => {
        this.movie = response.data
      })
      .catch(error => {
        alert('Error loading Movie')
        console.log(error.response)
      })
  },
  methods: {
    submitMovie() {
      this.$http.put(`http://localhost:3000/movies/${this.$route.params.id}`, this.movie)
        .then(response => {
          alert(`Successfully updated ${response.data.Name}`)
        })
        .catch(error => {
          alert(error.response)
        })
    }
  }
}
</script>
<style scoped>
form {
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 10px;
  border: 1px solid blueviolet;
  box-shadow: 2px 4px 10px rgba(137, 43, 226, 0.2);
  display: block;
}
.form__item {
  display: block;
  margin-bottom: 1rem;
  text-align: left;
}
label {
  font-size: 21px;
  color: black;
  display: block;
}
input, select {
  font-size: 18px;
  border: 1px solid blueviolet;
  border-radius: 2px;
  width: 90%;
  padding: 1rem;
}
</style>