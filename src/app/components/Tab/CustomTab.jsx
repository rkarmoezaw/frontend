'use client';
import { useState } from 'react';
import './Tab.css';

export default function CustomTab({ headers }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>
        {headers.map((header, i) => (
          <div className='tab-header' key={i} onClick={() => setActiveTab(i)}>
            {header}
          </div>
        ))}
      </div>
      <div>{headers.at(activeTab)}</div>
    </div>
  );
}
