const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonName = document.querySelector('.pokemon_name')
const pokemonImage = document.querySelector('.pokemon_image')

const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
let pokemonPosition = 1

const getPokemon = async (pokemon) =>{
    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''
    const apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(apiPokemon.status === 200){
        const data = await apiPokemon.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    const dataPokemon = await getPokemon(pokemon)

    if(dataPokemon){
        pokemonPosition = dataPokemon.id
        pokemonImage.style.display = 'block'
        pokemonNumber.innerHTML = `${dataPokemon.id} - `
        pokemonName.innerHTML = dataPokemon.name
        pokemonImage.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = ''
    
    }else{
        pokemonName.innerHTML = 'Not found.';
        pokemonNumber.innerHTML = '';
        input.value = '';
        pokemonImage.style.display = 'none';
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
})

btnNext.addEventListener('click', () => {
    pokemonPosition += 1; 
    renderPokemon(pokemonPosition)
})

btnPrev.addEventListener('click', () => {
    if(pokemonPosition > 1){
    pokemonPosition -= 1
    renderPokemon(pokemonPosition)
    }
})

renderPokemon(pokemonPosition)