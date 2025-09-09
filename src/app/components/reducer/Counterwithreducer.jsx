'use client';
import React, { useReducer } from 'react';

let initState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'Inc': {
      return { count: state.count + 1 };
    }
    case 'Dec': {
      return { count: state.count - 1 };
    }
    case 'Reset': {
      return { count: 0 };
    }
    default:
      return state;
  }
}

export default function Counterwithreducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'Inc' })}>Inc</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'Dec' })}>Dec</button>
    </div>
  );
}
