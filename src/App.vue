<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <px-header />
    <div class="container">
      <ul>
        <px-card v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
      </ul>
    </div>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxCard from "@/components/PxCard";
import api from "@/api.js";

export default {
  name: "App",
  components: {
    PxHeader,
    PxCard
  },
  data() {
    return {
      pokemons: []
    };
  },
  created() {
    api.getPokemons().then(pokemons => (this.pokemons = pokemons));
  }
};
</script>

<style>
body {
  margin: 0;
  background: orangered;
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
</style>
