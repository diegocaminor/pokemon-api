<template>
  <div class="popup">
    <button id="closeBtn">Close</button>
    <h2>diego camino</h2>
    <div class="card-detail">
      <img class="card-detail-image" :src="pokemonDetail.image" />
      <h2 class="card-detail-title">{{pokemonDetail.id}}. {{pokemonDetail.name}}</h2>
      <p
        class="card-detail-desc"
      >Height: {{pokemonDetail.height}} | Weight: {{pokemonDetail.weight}} | Type: {{pokemonDetail.type}}</p>
    </div>
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
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style scoped>
.popup {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(240, 255, 240, 0.8);
}
</style>
