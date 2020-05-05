import React from 'react';
import TodoTitle from './components/TodoTitle';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';


import './App.css';


const App = () => {

  const todos = [
    { id: 1, title: 'Отдохнуть'}, 
    { id: 2, title: 'Подумать о смысле жизни'}, 
    { id: 3, title: 'Вернуться к первому пункту'},
  ];

  return (
     <div className="app">
    <TodoTitle />
    <TodoSearch />
    <TodoList todos={todos}/>
    <TodoAdd />
    </div>
  );
}

export default App;
