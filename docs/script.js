const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");

const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  try {
    const APIResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
    );

    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    } else if (APIResponse.status === 404) {
      // Pokémon not found
      return null;
    } else {
      // Other API errors
      throw new Error(`API Error: ${APIResponse.status}`);
    }
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return null;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Carregando...";
  pokemonNumber.innerHTML = "";
  pokemonImage.style.display = "none"; // Hide image while loading

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = "block";
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

    // Prioritize animated sprite, fallback to static, then official artwork
    if (data.sprites.versions["generation-v"]["black-white"].animated.front_default) {
      pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
    } else if (data.sprites.front_default) {
      pokemonImage.src = data.sprites.front_default;
    } else if (data.sprites.other["official-artwork"].front_default) {
      pokemonImage.src = data.sprites.other["official-artwork"].front_default;
    } else {
      pokemonImage.src = "https://via.placeholder.com/150?text=No+Image"; // Placeholder if no image found
    }
    
    searchPokemon = data.id;
    input.value = ""; // Clear input after successful search
  } else {
    pokemonImage.style.display = "none";
    pokemonName.innerHTML = "Não encontrado :(";
    pokemonNumber.innerHTML = "";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value);
});

btnPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon--;
    renderPokemon(searchPokemon);
  }
});

btnNext.addEventListener("click", () => {
  searchPokemon++;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);

