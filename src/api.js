const url = "https://pokeapi.co/api/v2";
const pokeCache = [];

// async function getPokemons() {
const getPokemons = async (offset) => {
  const res = await fetch(`${url}/pokemon?limit=50&offset=${offset}`);
  const data = await res.json();
  let pokemons = data.results.map((result, index) => ({
    ...result,
    id: offset + index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset +
      index +
      1}.png`,
  }));
  return pokemons;
};

const selectPokemon = async (id) => {
  let pokemon = {};
  if (!pokeCache[id]) {
    const res = await fetch(`${url}/pokemon/${id}`);
    const data = await res.json();
    const type = data.types.map((item) => item.type.name).join(", ");
    pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      type,
    };
    pokeCache[id] = pokemon;
  } else {
    pokemon = pokeCache[id];
  }
  return pokemon;
};

export default {
  getPokemons,
  selectPokemon,
};
