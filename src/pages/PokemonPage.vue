<template>
  <h1 v-if="!pokemon">Cargando...</h1>

  <div v-else>
    <h1>¿Quien es este Pokémon?</h1>

    <!--Picture-->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="true" />

    <!--Options-->
    <PokemonOptions :pokemons="pokemonArr" />
  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>