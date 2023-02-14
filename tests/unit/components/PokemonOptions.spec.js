import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    })
  })

  test('debe hacer match con el snapshot', () => {

    expect(wrapper.html()).toMatchSnapshot()
    // expect(wrapper.html()).toMatchInlineSnapshot()

  })

  test('debe mostras las 4 opciones correctamente', () => {

    //deben existir 4 li
    const liPokemons = wrapper.findAll('li')
    expect(liPokemons.length).toBe(4)

    //cada li debe tener el nombre del pokemon
    expect(liPokemons[0].text()).toBe('pikachu')
    expect(liPokemons[1].text()).toBe('charmander')
    expect(liPokemons[2].text()).toBe('venusaur')
    expect(liPokemons[3].text()).toBe('mew')

  })

  test('debe emitir "selection" con sus respectivos parámetros al hacer click', () => {

    const [l1, l2, l3, l4] = wrapper.findAll('li')
    
    l1.trigger('click')
    l2.trigger('click')
    l3.trigger('click')
    l4.trigger('click')

    console.log(wrapper.emitted('selectionPokemon'))
    expect(wrapper.emitted('selectionPokemon').length).toBe(4)
    expect(wrapper.emitted('selectionPokemon')[0]).toEqual([5])
    expect(wrapper.emitted('selectionPokemon')[1]).toEqual([10])
    expect(wrapper.emitted('selectionPokemon')[2]).toEqual([15])
    expect(wrapper.emitted('selectionPokemon')[3]).toEqual([20])

  })

})