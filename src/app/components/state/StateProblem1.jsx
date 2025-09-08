'use client';
import { useState } from 'react';

export default function StateProblem1() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
          //Render once
        }}
      >
        + 3
      </button>
    </>
  );
}
