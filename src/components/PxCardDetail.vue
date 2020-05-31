<template>
  <div class="popup">
    <button id="closeBtn" @click="closeModal">Close</button>
    <div class="card-detail">
      <img class="card-detail-image" :src="pokemonDetail.image" />
      <h2 class="card-detail-title">{{pokemonDetail.id}}. {{pokemonDetail.name}}</h2>
      <p class="card-detail-desc">
        <small>Height:</small>
        {{pokemonDetail.height}} |
        <small>Weight:</small>
        {{pokemonDetail.weight}} |
        <small>Type:</small>
        {{pokemonDetail.type}}
      </p>
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
  background: rgb(240, 255, 240, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

#closeBtn {
  position: absolute;
  top: 20px;
  right: 20px;
}

button {
  padding: 10px 20px;
  background-color: orangered;
  color: white;
  border-radius: 5px;
  border: none;
}

button:hover {
  cursor: pointer;
  transform: translateY(-1px);
  box-shadow: 0px 1px 2px darkred;
}
</style>
