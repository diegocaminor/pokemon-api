const url = "https://pokeapi.co/api/v2";
const pokeCache = [];

// async function getPokemons() {
const getPokemons = async () => {
  const res = await fetch(`${url}/pokemon?limit=20`);
  const data = await res.json();
  const pokemons = data.results.map((result, index) => ({
    ...result,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
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
