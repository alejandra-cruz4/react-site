import React from 'react';

const HelloLifemiles = () => {
  
  function sayHello() {
    alert('Hello, Lifemiless! :)');
  }
  
  return (
    <button onClick={sayHello}>Click me!</button>
  );
};

export default HelloLifemiles;    
