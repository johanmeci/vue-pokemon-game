<template>
  <div class="options-container">
    <ul>
      <li 
        v-for="pokemon in pokemons" 
        :key="pokemon.id" 
        @click="$emit('selectionPokemon', pokemon.id)">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  /* Pokemon Options */
  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 10px;
  }

  li {
    background-color: white;
    border-radius: 25px;
    cursor: pointer;
    width: 100%;
    height: 35px;
    transition: all 320ms ease-in-out;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .options-container {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
</style>