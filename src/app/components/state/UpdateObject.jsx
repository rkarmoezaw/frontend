'use client';

import { useState } from 'react';

export default function UpdateObject() {
  const [state, setState] = useState({
    name: 'Someone',
    age: 31,
  });

  return (
    <>
      <div>
        Name : {state.name} <br />
        Age: {state.age}
      </div>
      <button onClick={() => setState({ ...state, age: state.age + 1 })}>Click</button>
    </>
  );
}
