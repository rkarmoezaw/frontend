'use client';

import { useEffect, useState } from 'react';

export default function EffectDemo() {
  const [value, setValue] = useState(0);
  const [another, setAnother] = useState(0);
  console.log('Render');
  useEffect(() => console.log('Effect Fired 1'), []);
  useEffect(() => console.log('Effect Fired 2'), [value]);

  const btnHandler = () => setValue(value + 1);
  return (
    <div>
      Effect Demo {value}
      <button onClick={btnHandler}>Click</button>
      <button onClick={() => setAnother(another + 1)}>Another</button>
    </div>
  );
}
