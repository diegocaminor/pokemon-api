<template>
  <div class="card-detail">
    <img class="card-detail-image" :src="pokemonDetail.image" />
    <h2 class="card-detail-title">{{pokemonDetail.id}}. {{pokemonDetail.name}}</h2>
    <p
      class="card-detail-desc"
    >Height: {{pokemonDetail.height}} | Weight: {{pokemonDetail.weight}} | Type: {{pokemonDetail.type}}</p>
  </div>
</template>

<script>
export default {
  name: "PxCardDetail",
  props: {
    msg: String,
    pokemonDetail: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    closeModal() {}
  }
};
</script>

<style scoped>
.container .card-detail {
  width: 100vw;
  height: 100vh;

  background: rgb(240, 255, 240, 0.8);
}
</style>
