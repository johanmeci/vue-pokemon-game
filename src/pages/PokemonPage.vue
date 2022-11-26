<template>
  <h1>¿Quien es este Pokémon?</h1>

  <!--Picture-->
  <PokemonPicture />

  <!--Options-->
  <PokemonOptions />

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

export default {
  components: {
    PokemonPicture,
    PokemonOptions
  }
}
</script>

<style>

</style>