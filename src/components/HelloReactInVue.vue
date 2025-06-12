<template>
  <div>
    <h2>This is a Vue component</h2>
    <ReactInVue :name="'Vue User'" />
  </div>
</template>

<script setup>
import HelloReact from '../react/HelloReact.jsx';
import applyReactInVue from '../utils-backups/applyReactInVue.js';

const ReactInVue = applyReactInVue(HelloReact);
</script>
