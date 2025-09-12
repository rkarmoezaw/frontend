'use client';

import { useReducer, useState } from 'react';
import UseCustomReducer from '../hook/UseCustomReducer';

let initTodos = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' },
  { id: 4, title: 'Task 4' },
];

let id = 5;
const nextId = () => id++;

export function todoReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    case 'delete': {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    case 'update': {
      return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
    }
    default:
      return state;
  }
}

function Todo({ todo, onDelete, onUpdate }) {
  const [text, setText] = useState(todo.title);
  const [isEditing, setIsEditing] = useState(false);

  const onEditHandler = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      let uptodo = {
        ...todo,
        title: text,
      };
      onUpdate(uptodo);
    }
  };
  return (
    <div>
      {isEditing ? (
        <input type='text' value={text} onChange={e => setText(e.target.value)} />
      ) : (
        text
      )}
      <button type='button' onClick={() => onDelete(todo)}>
        Delete
      </button>
      <button type='button' onClick={onEditHandler}>
        {isEditing ? 'Update' : 'Edit'}
      </button>
    </div>
  );
}

function TodoEntry({ onAdd }) {
  const [text, setText] = useState('');

  const onClickHandler = () => {
    let todo = {
      id: nextId(),
      title: text,
    };
    onAdd(todo);
    setText('');
  };
  return (
    <div>
      <input type='text' value={text} onChange={e => setText(e.target.value)} />
      <button type='button' onClick={onClickHandler}>
        Add
      </button>
    </div>
  );
}

function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default function ToDoListWithReducer() {
  const [todos, dispatch] = UseCustomReducer(todoReducer, initTodos);
  const onDeleteHandler = todo => {
    dispatch({
      type: 'delete',
      payload: todo,
    });
  };

  const onAddHandler = todo => {
    dispatch({
      type: 'add',
      payload: todo,
    });
  };

  const onUpdateHandler = todo => {
    dispatch({
      type: 'update',
      payload: todo,
    });
  };

  return (
    <div>
      <ToDoCount count={todos.length} />
      <TodoEntry onAdd={onAddHandler} />
      <TodoList todos={todos} onDelete={onDeleteHandler} onUpdate={onUpdateHandler} />
    </div>
  );
}

function ToDoCount({ count }) {
  return <div>Count {count}</div>;
}
