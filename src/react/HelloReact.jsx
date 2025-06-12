import React from 'react';

const HelloReact = ({ name, onClick }) => {
  return (
    <div>
      Hello from React, {name}!<button onClick={onClick}>Click me</button>
    </div>
  );
};

export default HelloReact;
