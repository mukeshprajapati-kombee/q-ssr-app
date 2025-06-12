import React from 'react';
import { h, createApp } from 'vue';

export default function applyVueInReact(VueComponent) {
  return class VueInReact extends React.Component {
    container = React.createRef();

    componentDidMount() {
      this.vueApp = createApp({
        render: () => h(VueComponent, { ...this.props }),
      });
      this.vueApp.mount(this.container.current);
    }

    componentDidUpdate() {
      if (this.vueApp && this.vueApp._instance) {
        Object.assign(this.vueApp._instance.props, { ...this.props });
      }
    }

    componentWillUnmount() {
      this.vueApp && this.vueApp.unmount();
    }

    render() {
      return <span ref={this.container} />;
    }
  };
}
