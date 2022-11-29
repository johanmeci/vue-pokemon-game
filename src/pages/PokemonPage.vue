<template>
  <h1 v-if="!pokemon">Cargando...</h1>

  <div v-else>
    <h1>¿Quien es este Pokémon?</h1>

    <div class="pokegame-container">
    
      <!--Picture-->
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

      <!--Options-->
      <!-- @selection-pokemon / @selectionPokemon -->
      <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

    </div>

    <!-- <template v-if="showAnswer"></template> -->
    <div v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame" type="button">
        Nuevo juego
      </button>
    </div>

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
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ''
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()

        const rndInt = Math.floor(Math.random() * 4)
        this.pokemon = this.pokemonArr[rndInt]
      },
      checkAnswer(selectedId) {
        this.showPokemon = true
        this.showAnswer = true

        if(selectedId === this.pokemon.id) {
          this.message = `Correcto, ${this.pokemon.name}`
        } else {
          this.message = `Oops, era ${this.pokemon.name}`
        }
      },
      newGame() {
        this.showPokemon = false
        this.showAnswer = false
        this.pokemonArr = []
        this.pokemon = null

        this.mixPokemonArray()
      }
    },
    mounted() {
      this.mixPokemonArray()
    }
  }
</script>

<style>
  .pokegame-container {
    border: 1px solid #ffffff00;
    border-radius: 15px;
    width: 270px;
    height: 420px;
    display: flex;
    flex-direction: column;
    margin: 2em auto auto auto;
    padding: 1em 1em 1.5em 1em;
    background-image: url('https://i.pinimg.com/originals/ea/1d/5b/ea1d5bb4dc48f7bf0ac30e8596687be7.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }

  button {
    cursor: pointer;
  }
</style>