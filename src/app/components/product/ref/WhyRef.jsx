'use client';

import { useState } from 'react';

export default function WhyRef() {
  let [count, setCount] = useState(0);

  let value = 0;
  const onInc = () => setCount(count + 1);

  const IncLocal = () => value++;
  console.log('Counter', count, 'Local', value);
  return (
    <div>
      Counter {count}
      <button onClick={onInc}>OnInc</button>
      <button onClick={IncLocal}>IncLocal</button>
    </div>
  );
}
