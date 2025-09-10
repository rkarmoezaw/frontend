'use client';

import { useContext, useState } from 'react';
import { ThemedContext } from './ThemedContext';

function Level1UI() {
  return (
    <div>
      Level1 UI
      <Level2UI />
    </div>
  );
}
function Level2UI() {
  return (
    <div>
      Level2 UI
      <Level3UI />
    </div>
  );
}

function Level3UI() {
  const theme = useContext(ThemedContext);
  console.log(theme);
  return <div style={{ color: theme }}>Level3 UI</div>;
}

export default function ContextDemo() {
  const [color, setColor] = useState('');
  return (
    <div>
      <ThemedContext value={color}>
        <button onClick={() => setColor('red')}>Change</button>
        <Level1UI />
      </ThemedContext>
    </div>
  );
}
