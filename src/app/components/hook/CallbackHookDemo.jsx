'use client';
import { useState } from 'react';

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default function CallbackHookDemo() {
  const [num, setNum] = useState(0);
  let fac = factorial(num);

  return (
    <div>
      Factorial: {fac} <br />
      <input type='number' value={num} onChange={e => setNum(e.target.value)} />
    </div>
  );
}
