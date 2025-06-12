<template>
  <span style="color: green">Hello from Vue! {{ msg }}</span>
</template>

<script setup>
defineProps({ msg: String });
</script>
