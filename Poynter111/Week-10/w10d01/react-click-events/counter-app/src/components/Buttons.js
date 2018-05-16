import React from 'react';

const Buttons = ({increment, decrement, reset}) => {
  return (
    <div>
      <button className="button is-primary" onClick={increment}>+</button>
      {' '}
      <button className="button is-primary" onClick={decrement}>-</button>
      {' '}
      <button className="button is-primary" onClick={reset}>C</button>
    </div>
  );
};

export default Buttons;
