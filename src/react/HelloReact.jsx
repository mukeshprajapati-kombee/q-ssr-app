import React from 'react';
import VueInReact from './VueInReact';

const HelloReact = ({ name, onClick }) => {
  return (
    <div>
      Hello from React, {name}!<button onClick={onClick}>Click me</button>
      <VueInReact msg="(Vue inside React!)" />
    </div>
  );
};

export default HelloReact;
