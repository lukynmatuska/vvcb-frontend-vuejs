<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MenuComponent'
})
</script>

<template>
    <div>
        <router-link to="/">Domů</router-link>
        <router-link to="/about">Jak to funguje?</router-link>
        <router-link to="/monitors">Výsledky</router-link>
    </div>
</template>

