'use client';
import { useState } from 'react';

let todos = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' },
  { id: 4, title: 'Task 4' },
];

let id = 5;

export default function ItemLists() {
  const [todoText, setTodoText] = useState('');
  const [toDo, setToDo] = useState(todos);

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
