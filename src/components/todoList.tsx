import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
  todos: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label style={{display: 'flex'}}>
              <input type="checkbox" checked={todo.completed}/>
              <span>{todo.title}</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};

export default TodoList;
