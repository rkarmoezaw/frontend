'use client';

import { useEffect, useState } from 'react';

export default function WhyClean() {
  let [now, setNow] = useState(new Date());
  useEffect(() => {
    console.log('Render');
    const interval = setInterval(() => {
      console.log('Tik');
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <div>{now.toLocaleTimeString()}</div>;
}
