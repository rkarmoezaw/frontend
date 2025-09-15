'use Client';
import { useState, useEffect, useDebugValue } from 'react';

export default function UseCustomFetch(url) {
  useDebugValue(url ? url : 'No URL');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);
  return [loading, data];
}
