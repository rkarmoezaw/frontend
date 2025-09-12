'use client';

import { useState } from 'react';

export default function UseCustomReducer(reducer, initState) {
  let [state, setState] = useState(initState);

  function dispatch(action) {
    let newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}
