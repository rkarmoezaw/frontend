'use client';

import { useEffect, useState } from 'react';

export default function FetchUser() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        setUser(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {user.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
