<template>
  <q-page class="flex flex-center">
    <h2>Vue + React via Veaury</h2>
    <ReactInVue />
  </q-page>
</template>

<script setup>
import Counter from 'src/react/Counter.tsx';
import * as veaury from 'veaury';
console.log('veaury:', veaury);
const { applyReactInVue } = veaury.default || veaury;
const ReactInVue = applyReactInVue(Counter);
</script>
