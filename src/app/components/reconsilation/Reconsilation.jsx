'use client';
import { useState } from 'react';
import Counter from './Counter';
export default function Reconsilation() {
  const [showB, setShowB] = useState(false);
  return (
    <>
      <Counter />
      {showB && <Counter />}
      <label>
        <input type='checkbox' checked={showB} onChange={e => setShowB(e.target.checked)} /> Render
        Second Counter
      </label>
    </>
  );
}
