/* eslint-disable no-template-curly-in-string */
import logo from './logo.svg';
import './App.css';

import React, { useCallback, useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TableHeader_Ex from './components/TableHeader';

function createBulkTodos() {
  let array = [];
  for (let i = 1; i <= 2500; i++) {
    const newLocal = '할 일 ${ i }입니다.';
    array.push({ id: i, text: newLocal, checked: false });
  }
  return array;
}

function App() {
  /*
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'react 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: 'component styling 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어 보기',
      checked: true,
    },
    {
      id: 4,
      text: '이슈관리 테이블 만들어 보기',
      checked: false,
    },
  ]);
  const nextID = useRef(5);
  */
  const [todos, setTodos] = useState(createBulkTodos);
  const nextID = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const newItem = { id: nextID.current, text, checked: false };
      setTodos((todos) => todos.concat(newItem));
      nextID.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <div>
      <TodoTemplate>
        Todo List App을 만들자
        <TodoInsert onInsert={onInsert} />
        <TableHeader_Ex />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
