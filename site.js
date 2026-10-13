//const secretKey = "It's a secret to everybody.";
//const secretMessage = "With a secret like this, it's dangerous to go alone!";

//localStorage.setItem(secretKey, secretMessage);

//console.log("Secret message sent to localStorage");

const getRandomPokemon = async () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};

const renderPokemon = (pokemonObj) => {
  const parentElement = document.querySelector('.pokemon-ctr');

  const img = document.createElement('img');
  img.src = pokemonObj.sprites.front_default;
  img.alt = pokemonObj.name;
  
  parentElement.append(img);
  
  return pokemonObj;
};

const init = async () => {
  const pokemonData = await getRandomPokemon();
  if (pokemonData) {
    renderPokemon(pokemonData);
  }
};

init();