<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <header>
    <Navigation />
  </header>
  <RouterView />
  <div>
    <OptionsAPIComponent />
    <CompositionAPIComponent />
  </div>
</template>

<style scoped>

</style>

<script>
import OptionsAPIComponent from './components/OptionsAPIComponent.vue';
import CompositionAPIComponent from './components/CompositionAPIComponent.vue';

export default {
  name: 'App',
  components: {
    OptionsAPIComponent,
    CompositionAPIComponent
  }
};
</script>

