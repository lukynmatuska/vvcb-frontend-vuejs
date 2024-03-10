<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'AboutView'
})
</script>

<script setup lang="ts">
import FooterComponent from '@/components/Footer.vue';
import MenuComponent from '@/components/Menu.vue';
</script>

<template>
    <MenuComponent/>
    <h1>Jak to celé funguje?</h1>
    <p>
        TODO.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Etiam bibendum elit eget erat. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aliquam erat volutpat. In enim a arcu imperdiet malesuada. Sed convallis magna eu sem. Vestibulum fermentum tortor id mi. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
    </p>
    <FooterComponent/>
</template>
