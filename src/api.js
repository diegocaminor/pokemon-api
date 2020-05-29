const url = "https://pokeapi.co/api/v2";

function getPokemones() {
  fetch(`${url}/pokemon?limit=151`) // &offset=20
    .then((response) => response.json())
    .then(function(allpokemon) {
      // console.log(allpokemon);
      let pokemons = [];
      allpokemon.results.forEach(function(pokemon, index) {
        pokemons.push({
          id: index + 1,
          name: pokemon.name,
          url: pokemon.url,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`,
        });
      });
      console.log(pokemons);
      renderPokemons(pokemons);
    });
}

function renderPokemons(pokemons) {
  const pokedex = document.getElementById("container-pokedex");
  const pokemonHTMLString = [];
  pokemons.forEach(function(pokemon) {
    pokemonHTMLString.push(
      `
      <li class="card">
        <img class="card-image" src="${pokemon.image}"/>
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
      </li>
      `
    );
  });
  pokedex.innerHTML = pokemonHTMLString.join("");
}
// function fetchPokemonData(pokemon) {
//   let url = pokemon.url; // <--- this is saving the pokemon url to a variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
//   fetch(url)
//     .then((response) => response.json())
//     .then(function(pokeData) {
//       console.log(pokeData);
//     });
// }

export default {
  getPokemones,
};
