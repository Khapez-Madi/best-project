import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  console.log(classes);
  const [state, setState] = useState(0);
  return (
    <div>
      <p className={classes.text}>{state}</p>
      <button className={classes.btn} onClick={() => setState((prev) => prev + 1)}>
        inc
      </button>
      <button onClick={() => setState((prev) => prev - 1)}>dec</button>
    </div>
  );
};
