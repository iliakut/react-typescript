import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggleCheckbox(id: number): void;
  onRemoveTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (
  {
    todos,
    onToggleCheckbox,
    onRemoveTodo
  }) => {

  const onRemove = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemoveTodo(id)
  };

  if (!todos.length) {
    return (
      <p className="center">No todo items</p>
    )
  }

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label style={{display: 'flex'}}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleCheckbox(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => onRemove(event, todo.id)}
              >delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};

export default TodoList;
