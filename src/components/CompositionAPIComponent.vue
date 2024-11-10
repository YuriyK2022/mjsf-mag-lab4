<template>
    <div>
      <h1>ServiceProvider Example (Composition API)</h1>
      <p>{{ serviceProvider.someMethod() }}</p>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';
  
  export default {
    name: 'CompositionAPIComponent',
    setup() {
      const serviceProvider = inject('$serviceProvider');
      return { serviceProvider };
    }
  };
  </script>
  