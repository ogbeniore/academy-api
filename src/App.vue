<template>
  <div id="app">
    <div class="search_form">
      <h1>My Movie App</h1>
      <router-link class="form_button" :to="{ name: 'home' }">
        Home
      </router-link>
      <router-link class="form_button" :to="{ name: 'new-movie' }">
        Add Movie
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.search_form {
  padding-bottom: 2rem;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  margin: 0 auto;
}
form {
  display: flex;
  margin: 0 auto;
  max-width: 700px;
}
/* .form_item,
input,
select {
  padding: 1rem;
  font-size: 18px;
  border: 1px solid blueviolet;
  border-radius: 50px;
  margin-right: 2rem;
  flex: 1;
} */
.form_button {
  background: blueviolet;
  color: aliceblue;
  border-radius: 50px;
  padding: 1rem 3rem;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem;
}
.form_button:focus,
.form_item:focus {
  outline: 0;
  box-shadow: 1px 1px 10px blueviolet
}
.container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
.movie_form form {
display: block;
}
form > div {
  margin: 1rem;
  color: #42b983;
}
</style>
