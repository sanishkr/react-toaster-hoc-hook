import React from 'react';
import { useToast } from './Toast';

function Child() {
  const toast = useToast();
  const showToast = () => toast.add('Say Helloooo.. to Toastr! '+new Date().getTime());

  return (
    <>
      <h3>Hello from child component!</h3>
      <button onClick={showToast}>Show me a toast</button>
    </>
  );
}

export default Child;
