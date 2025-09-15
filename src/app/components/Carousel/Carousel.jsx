'use client';

import { useState } from 'react';
import './Carousel.css';

export default function Carousel({ children }) {
  const [current, setCurrent] = useState(0);
  console.log(current);

  const btnLeft = () => (current === 0 ? setCurrent(children.length - 1) : setCurrent(current - 1));
  const btnRight = () =>
    current === children.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  return (
    <div>
      Carousel Container
      <div className='carousel-container'>
        <div className='content'>{children[current]}</div>
      </div>
      <div>
        <button type='button' onClick={btnLeft}>
          {'<<'}
        </button>
        <button type='button' onClick={btnRight}>
          {'>>'}
        </button>
      </div>
    </div>
  );
}
