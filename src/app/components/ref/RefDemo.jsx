'use client';

import { useRef, useState } from 'react';

export default function RefDemo() {
  let [count, setCount] = useState(0);

  let ref = useRef(0);
  const onInc = () => setCount(count + 1);

  const IncLocal = () => {
    ref.current = ref.current + 1;
  };
  console.log('Counter', count, 'Local', ref.current);
  return (
    <div>
      Counter {count}
      <button onClick={onInc}>OnInc</button>
      <button onClick={IncLocal}>IncLocal</button>
    </div>
  );
}
