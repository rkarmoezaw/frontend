'use client';

import { use, useState } from 'react';
import { useContext, useReducer } from 'react';
import { todoReducer } from '../reducer/ToDoListWithreducer';
import { TodoContext, TodoDispatchContext } from './TodoContext';

let initTodos = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' },
  { id: 4, title: 'Task 4' },
];

let id = 5;

const nextId = () => id++;

function TodoList() {
  const todos = useContext(TodoContext);
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function Todo({ todo }) {
  const [text, setText] = useState(todo.title);
  const [isEditing, setIsEditing] = useState(false);

  const onUpdate = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      let uptodo = {
        ...todo,
        title: text,
      };
      dispatch({
        type: 'update',
        payload: uptodo,
      });
    }
  };

  const dispatch = useContext(TodoDispatchContext);
  const onDelete = todo =>
    dispatch({
      type: 'delete',
      payload: todo,
    });

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
      <button type='button' onClick={() => onUpdate(todo)}>
        {isEditing ? 'Update' : 'Edit'}
      </button>
    </div>
  );
}

function TodoEntry() {
  const dispatch = useContext(TodoDispatchContext);
  const [text, setText] = useState('');

  const onClickHandler = () => {
    let todo = {
      id: nextId(),
      title: text,
    };
    dispatch({
      type: 'add',
      payload: todo,
    });
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

export default function ToDoReducerWithContext() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);
  return (
    <div>
      <TodoContext value={todos}>
        <TodoDispatchContext value={dispatch}>
          <TodoEntry />
          <TodoList />
        </TodoDispatchContext>
      </TodoContext>
    </div>
  );
}
