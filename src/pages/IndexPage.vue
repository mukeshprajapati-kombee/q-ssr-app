// ReactInVue.vue
<template>
  <div>
    <div ref="reactRoot"></div>
    <div v-if="clicked">You clicked the React button!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { renderHelloReact } from '../utils-backups/renderHelloReact';

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
    const clicked = ref(false);
    let root: any;

    const handleReactClick = () => {
      clicked.value = true;
    };

    onMounted(() => {
      if (reactRoot.value) {
        root = renderHelloReact(reactRoot.value, props.message, handleReactClick);
      }
    });

    watch(
      () => props.message,
      (newVal) => {
        if (reactRoot.value) {
          renderHelloReact(reactRoot.value, newVal, handleReactClick);
        }
      },
    );

    onBeforeUnmount(() => {
      root?.unmount();
    });

    return { reactRoot, clicked };
  },
});
</script>
