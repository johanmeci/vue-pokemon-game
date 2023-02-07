import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
 
  test('debe de ser un arreglo de numeros', () => { 

    const pokemons = getPokemons()

    expect(pokemons.length).toBe(250)
    //Validar que son numericos y cumplen el orden
    expect(pokemons[0]).toBe(1)
    expect(pokemons[249]).toBe(250)

  })

  test('debe retornar un arreglo de 4 elementos con nombres de pokemons', async () => {

    const pokemons = await getPokemonNames([1,2,3,4])

    expect(pokemons).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 }
    ])

  })

  test('getPokemonOptions debe retornar un arreglo mezclado', async() => {

    const pokemons = await getPokemonOptions()

    expect(pokemons.length).toBe(4)

    expect(pokemons).toEqual([
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      }
    ])

  })

})