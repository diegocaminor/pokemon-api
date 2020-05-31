<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <px-header />
    <div class="container">
      <ul class="container-list">
        <px-card v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
      </ul>
      <button @click="loadMore(page+=1)" id="loadMoreBtn">Cargar más</button>
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
      pokemons: [],
      pokemonDetail: {},
      page: 0,
      perPage: 50
    };
  },
  created() {
    api
      .getPokemons(0, this.pokemons)
      .then(pokemons => (this.pokemons = pokemons));
  },
  methods: {
    loadMore() {
      let offset = this.perPage * this.page;
      // let self = this; // bind reempla utilizar la variable self
      api.getPokemons(offset, this.pokemons).then(
        function(pokemons) {
          this.pokemons = this.pokemons.concat(pokemons);
          // other way to concat arrays
          // [].push.apply(this.pokemons, pokemons);
          // self.pokemons.concat(pokemons);
        }.bind(this) // aquí está bind reemplazando self
      );
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

ul.container-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  padding: 10px 20px;
  background-color: darkred;
  color: white;
  border-radius: 5px;
  border: none;
}

button:hover {
  cursor: pointer;
  transform: translateY(-1px);
  box-shadow: 0px 1px 2px orangered;
}

#loadMoreBtn {
  margin-bottom: 30px;
}
</style>
