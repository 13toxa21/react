import React from 'react';
import TodoListItem from './TodoListItem'

const TodoList = (props) => {

    return (
    <ul className="app-list list-group">
    {props.todos.map(todo =>{
      const {id, title} = todo;
        return (
          <TodoListItem key={id} title ={title} />
        )
      })
    }
  </ul>
  );
};

export default TodoList;