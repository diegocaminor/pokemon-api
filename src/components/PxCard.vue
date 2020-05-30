<template>
  <li class="card" @click="selectPokemon(pokemon.id)">
    <img class="card-image" :src="pokemon.image" />
    <h2 class="card-title">{{pokemon.id}}. {{pokemon.name}}</h2>
    <template v-if="showPokemonDetail">
      <px-card-detail :pokemonDetail="pokemonDetail" />
    </template>
  </li>
</template>


<script>
import PxCardDetail from "@/components/PxCardDetail";
import api from "@/api.js";

export default {
  name: "PxCard",
  components: {
    PxCardDetail
  },
  data() {
    return {
      showPokemonDetail: false,
      pokemonDetail: {}
    };
  },
  props: {
    pokemon: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    selectPokemon(id) {
      let self = this;
      api.selectPokemon(id).then(function(pokemonDetail) {
        self.pokemonDetail = pokemonDetail;
      });
      this.showPokemonDetail = !this.showPokemonDetail;
    }
  }
};
</script>

<style scoped>
li.card {
  margin: 10px 0px;
  height: 200px;
  width: 200px;
  list-style: none;
  background: white;
  cursor: pointer;
}
</style>