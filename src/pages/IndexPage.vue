// ReactInVue.vue
<template>
  <div ref="reactRoot"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { renderHelloReact } from '../utils/renderHelloReact';
import HelloReact from '../react/HelloReact.jsx';

export default defineComponent({
  name: 'ReactInVue',
  props: {
    message: {
      type: String,
      default: 'Hello from Vue',
    },
  },
  setup(props) {
    const reactRoot = ref<HTMLElement | null>(null);
    let root: any;

    onMounted(() => {
      if (reactRoot.value) {
        root = renderHelloReact(reactRoot.value, props.message);
      }
    });

    watch(
      () => props.message,
      (newVal) => {
        if (reactRoot.value) {
          renderHelloReact(reactRoot.value, newVal);
        }
      },
    );

    onBeforeUnmount(() => {
      root?.unmount();
    });

    return { reactRoot };
  },
});
</script>
