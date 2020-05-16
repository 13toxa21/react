import React from "react";
import TodoTitle from "./components/TodoTitle";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoBtnPanel from "./components/TodoBtnPanel";

const App = () => {
  const todos = [
    { id: 1, title: "Отдохнуть" },
    { id: 2, title: "Подумать о смысле жизни" },
    { id: 3, title: "Вернуться к первому пункту" },
  ];

  const doneItem = (id) => {
    alert(id);
  };

  const doneLike = (id) => {
    alert(id);
  };

  return (
    <div className="app">
      <TodoTitle />
      <TodoSearch />
      <TodoList todos={todos} myFunc={doneItem} myFunc2={doneLike} />
      <TodoBtnPanel />
    </div>
  );
};

export default App;
