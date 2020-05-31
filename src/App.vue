<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <px-header />
    <div class="container">
      <ul>
        <px-card
          v-on:show-modal="showModal"
          v-on:close-modal="closeModal"
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </ul>
      <template v-if="pokemonDetailIsEmpty(pokemonDetail)">
        <px-card-detail :pokemonDetail="pokemonDetail" />
      </template>
    </div>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxCard from "@/components/PxCard";
import PxCardDetail from "@/components/PxCardDetail";
import api from "@/api.js";

export default {
  name: "App",
  components: {
    PxHeader,
    PxCard,
    PxCardDetail
  },
  data() {
    return {
      pokemons: [],
      pokemonDetail: {}
    };
  },
  created() {
    api.getPokemons().then(pokemons => (this.pokemons = pokemons));
  },
  methods: {
    pokemonDetailIsEmpty(obj) {
      return Object.keys(obj).length;
    },
    showModal(id) {
      let self = this;
      api.selectPokemon(id).then(function(pokemonDetail) {
        console.log("ñaaaaa" + pokemonDetail);
        console.log("this" + this);
        self.pokemonDetail = pokemonDetail;
        /*eslint no-debugger: "error"*/
      });
    },
    closeModal() {
      alert("closeModal! :(");
    }
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
