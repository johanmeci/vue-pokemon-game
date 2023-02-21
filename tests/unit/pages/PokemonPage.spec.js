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
  
})