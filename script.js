const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  try {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    }
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = 'Carregando...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Não encontrado :(';    
    pokemonNumber.innerHTML = '';
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value);
  input.value = '';
});

btnPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon--;
    renderPokemon(searchPokemon);
  }
});

btnNext.addEventListener('click', () => {
  searchPokemon++;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
