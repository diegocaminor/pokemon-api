<template>
  <li class="card" @click="selectPokemon(pokemon.id)">
    <img class="card-image" :src="pokemon.image" />
    <h2 class="card-title">{{pokemon.id}}. {{pokemon.name}}</h2>
  </li>
</template>


<script>
export default {
  name: "PxCard",

  data() {
    return {
      showPokemonDetail: false
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
      this.showPokemonDetail = !this.showPokemonDetail;
      if (this.showPokemonDetail) {
        this.$emit("show-modal", id);
      } else {
        this.$emit("close-modal");
      }
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