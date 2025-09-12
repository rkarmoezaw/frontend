'use client';
import { useEffect, useState } from 'react';

let todos = [];

let id = 5;

export default function ItemLists() {
  const [todoText, setTodoText] = useState('');
  const [toDo, setToDo] = useState(todos);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setToDo(json));
  }, []);

  console.log(toDo);

  const onDelete = item => {
    setToDo(toDo.filter(td => td.id !== item.id));
  };
  return (
    <div>
      <input value={todoText} type='text' onChange={e => setTodoText(e.target.value)} />
      <button
        type='button'
        onClick={() => {
          setToDo([
            ...toDo,
            {
              id: id++,
              title: todoText,
            },
          ]);
          setTodoText('');
        }}
      >
        Add
      </button>
      <div>
        {toDo.map(item => (
          <div key={item.id}>
            <span>{item.title}</span>
            <button type='button' onClick={() => onDelete(item)}>
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
