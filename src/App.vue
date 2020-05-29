<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <px-header />
    <px-pokemon-card msg="This is my pokemon card" />
    <div class="container">
      <ul id="container-pokedex"></ul>
    </div>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxPokemonCard from "@/components/PxPokemonCard";
import api from "@/api.js";

export default {
  name: "App",
  components: {
    PxHeader,
    PxPokemonCard
  },
  data() {
    return {
      pokemones: []
    };
  },
  created() {
    api.getPokemones();
    // api.getJobs().then(pokemones => (this.pokemones = pokemones));
  }
};
</script>

<style>
body {
  margin: 0;
  background: orange;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div.container {
  display: flex;
  justify-content: center;
}
li.card {
  margin: 10px 0px;
  height: 200px;
  width: 200px;
  border: 1px solid red;
  list-style: none;
  background: white;
}
</style>
