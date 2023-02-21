import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })

  test('debe llamar el mixPokemonArr al montar', () => {

    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
    const wrapper = shallowMount(PokemonPage)
    expect(mixPokemonArraySpy).toHaveBeenCalled()

  })

  test('debe hacer match con el snapshot cuando cargan los pokemons', () => {

    //shallowMount -> montar los elementos sutilmente, sin hacer todo el ciclo de vida
    //mount -> si hace todo el proceso
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

  })

  test('debe motrar los componentes de PokemonPicture y PokemonOptions', () => {

    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    const picture = wrapper.find('pokemon-picture-stub')
    const options = wrapper.find('pokemon-options-stub')

    //PokemonPicture debe de existir
    expect(picture.exists()).toBeTruthy()    

    //PokemonOptions debe de existir
    expect(options.exists()).toBeTruthy()
    
    //PokemonPicture attribute pokemonid === '5'
    expect(picture.attributes('pokemonid')).toBe('5')

    //PokemonOptions attribute pokemons tobe true -> solo que exista
    expect(options.attributes('pokemons')).toBeTruthy()

  })
  
})