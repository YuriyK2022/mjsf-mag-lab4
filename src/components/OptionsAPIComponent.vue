<template>
    <div>
      <h1>ServiceProvider Example (Options API)</h1>
      <p>{{ $serviceProvider.someMethod() }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OptionsAPIComponent',
    mounted() {
      console.log(this.$serviceProvider);
    }
  };
  </script>
  