<template>
  <div class="container">
    <div class="image_wrapper">
    <img :src="movieData.Url" :alt="movieData.Name">
    </div>
    <div class="content">
      <h3>{{movieData.Name}}</h3>
      <h5>{{movieData.Type}}</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewMovie',
  data() {
    return {
      movieData: {
        Name: '',
        Type: '',
        Url: ''
      }
    }
  },
  mounted() {
    this.$http.get(`http://localhost:3000/movies/${this.$route.params.id}`)
      .then(response => {
        this.movieData = response.data
      })
      .catch(error => {
        alert('Error loading Movie')
        console.log(error.response)
      })
  }
}
</script>
<style scoped>
.container {
  display: block;
  text-align: left;
}
.image_wrapper {
  max-height: 300px;
  width: 100%;
  overflow: hidden;
  border-bottom: 4px solid blueviolet;
}
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>