<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>


<script>
export default {
  name: "PxPokemonCard",
  props: {
    msg: String,
    pokemon: {
      type: Object,
      default: () => {}
    }
  }
};
</script>