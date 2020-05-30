const url = "https://pokeapi.co/api/v2";

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
  console.log(pokemons);
  return pokemons;
};

const selectPokemon = async (id) => {
  const res = await fetch(`${url}/pokemon/${id}`);
  const data = await res.json();
  const type = data.types.map((item) => item.type.name).join(", ");
  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    type,
  };
  console.log(pokemon);
  return pokemon;
};

export default {
  getPokemons,
  selectPokemon,
};
