'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(0);
  const onClick = () => setCount(count + 1);
  const onAnotherClick = () => setAnother(another + 2);
  return (
    <>
      <h3>Counter</h3>
      <p>{count}</p>
      <p>Another {another}</p>
      <button type='button' onClick={onClick}>
        Increase
      </button>
      <button type='button' onClick={onAnotherClick}>
        Another
      </button>
    </>
  );
}
