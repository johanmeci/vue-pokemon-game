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
    gap: 15px;
  }

  li {
    border-radius: 25px;
    cursor: pointer;
    width: 100%;
    height: 32px;
    transition: all 320ms ease-in-out;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 2px rgb(0 0 0 / 30%);
    background-color: #f1f1f1;
  }

  li:hover {
    background-color: #f9f7f7;
  }

  .options-container {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
</style>