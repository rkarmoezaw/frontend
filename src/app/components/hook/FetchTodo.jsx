'use client';

import { useEffect, useState } from 'react';

export default function FetchTodo() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        setTodo(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {todo.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
