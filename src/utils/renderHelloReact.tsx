import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloReact from '../react/HelloReact.jsx';

const roots = new WeakMap<HTMLElement, ReactDOM.Root>();

export function renderHelloReact(container: HTMLElement, name: string, onClick?: () => void) {
  let root = roots.get(container);
  if (!root) {
    root = ReactDOM.createRoot(container);
    roots.set(container, root);
  }
  root.render(<HelloReact name={name} onClick={onClick} />);
  return root;
}
