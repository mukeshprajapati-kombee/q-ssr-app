<template>
  <q-page class="flex flex-center">
    <h2>Vue + React via Veaury</h2>
    <ReactInVue :msg="'Hello from Quasar SSR!'" />
  </q-page>
</template>

<script setup>
import HelloReact from 'src/react/HelloReact.jsx';
import * as veaury from 'veaury';
console.log('veaury:', veaury);
const { applyReactInVue } = veaury.default || veaury;
const ReactInVue = applyReactInVue(HelloReact);
</script>
