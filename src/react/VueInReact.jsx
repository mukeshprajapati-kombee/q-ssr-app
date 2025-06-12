import React, { useRef, useEffect } from 'react';
import { createApp, h } from 'vue';
import HelloVue from '../components/HelloVue.vue';

const VueInReact = ({ msg }) => {
  const containerRef = useRef(null);
  const vueAppRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      vueAppRef.current = createApp({
        render: () => h(HelloVue, { msg }),
      });
      vueAppRef.current.mount(containerRef.current);
    }
    return () => {
      if (vueAppRef.current) {
        vueAppRef.current.unmount();
        vueAppRef.current = null;
      }
    };
  }, [msg]);

  return <span ref={containerRef} />;
};

export default VueInReact;
