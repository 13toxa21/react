import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = (props) => {
  const { todos, myFunc, myFunc2 } = props;
  return (
    <ul className="app-list list-group">
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            title={todo.title}
            myFunc1={() => {
              myFunc(todo.id);
            }}
            myFuncLike={() => {
              myFunc2(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
