<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HomeView'
})
</script>

<script setup lang="ts">
import FooterComponent from '@/components/Footer.vue';
import MenuComponent from '@/components/Menu.vue';
import HelloWorldComponent from '@/components/HelloWorld.vue';
</script>

<template>
  <MenuComponent/>
  <HelloWorldComponent/>
  <FooterComponent/>
</template>
