<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HelloWorldComponent'
})
</script>

<template>
  <div>
    <h1>Vítejte!</h1>
    <p>
      Tohle nejsou oficiální stránky s&nbsp;výsledky Velká ceny Blanenska v požárním útoku.
      Oficiální výsledky hledejte na <a href="http://www.velkacenablanenska.cz/">stránkách soutěže</a>.
      Více o&nbsp;tom, jak tyto stránky fungují a&nbsp;k&nbsp;čemu slouží si můžete přečíst <router-link to="/about">zde</router-link>.
    </p>
  </div>
</template>
