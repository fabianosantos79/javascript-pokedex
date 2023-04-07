const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonName = document.querySelector('.pokemon_name')
const pokemonImage = document.querySelector('.pokemon_image')
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')

const getPokemon = async (pokemon) =>{
    const apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const dataPokemon = await apiPokemon.json();

    pokemonNumber.innerHTML = dataPokemon.id
    pokemonName.innerHTML = dataPokemon.name
    pokemonImage.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

form.addEventListener('submit', (event) => {
    event.preventDefault

    getPokemon(input.value)
})
