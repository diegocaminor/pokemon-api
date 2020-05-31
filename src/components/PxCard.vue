<template>
  <li class="card" @click="selectPokemon(pokemon.id)">
    <img class="card-image" :src="pokemon.image" />
    <h2 class="card-title">{{pokemon.id}}. {{pokemon.name}}</h2>
    <template v-if="pokemonDetailIsEmpty(pokemonDetail)">
      <px-card-detail v-on:close-modal="closeModal" :pokemonDetail="pokemonDetail" />
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
    pokemonDetailIsEmpty(obj) {
      return Object.keys(obj).length;
    },
    selectPokemon(id) {
      this.showPokemonDetail = !this.showPokemonDetail;
      let self = this;
      if (this.showPokemonDetail) {
        api.selectPokemon(id).then(function(pokemonDetail) {
          self.pokemonDetail = pokemonDetail;
        });
      } else {
        this.$emit("close-modal");
      }
    },
    closeModal() {
      this.pokemonDetail = {};
    }
  }
};
</script>

<style scoped>
.card {
  margin: 10px 10px;
  height: 200px;
  width: 200px;
  list-style: none;
  background: white;
}

.card:hover {
  cursor: pointer;
}
</style>