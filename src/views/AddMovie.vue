<template>
  <div class="form">
    <form @submit.prevent="submitMovie">
      <div class="form__item">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="e.g Men in Black" v-model="newMovie.Name">
      </div>
      <div class="form__item">
        <label for="type">Type</label>
        <select name="type" v-model="newMovie.Type">
          <option value="movie">Movie</option>
          <option value="music">Music</option>
        </select>
      </div>
      <div class="form__item">
        <label for="url">Image Url</label>
        <input type="url" name="url" placeholder="http://instagram.com/instagram" v-model="newMovie.Url" disabled>
      </div>
      <button class="form_button" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddMovie',
  data() {
    return {
      newMovie: {
        Name: '',
        Type: '',
        Url: 'http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg'
      }
    }
  },
  methods: {
    submitMovie() {
      this.$http.post('http://localhost:3000/movies', this.newMovie)
        .then(response => {
          this.newMovie = {
            Name: '',
            Type: '',
            Url: 'http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg'
          }
          alert(`Successfully added Movie with id ${response.data.id}`)
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