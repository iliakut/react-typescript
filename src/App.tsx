import React, {useState} from 'react';
import Navbar from "./components/navbar";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import {ITodo} from "./interfaces";

// тип FC - функциональный компонент
const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAddTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const onToggleCheckbox = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo
    }))
  };

  const onRemoveTodo = (id: number) => {
    const confirmRemove = window.confirm('Todo item will be removed');
    if (confirmRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  };

  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd={onAddTodo}/>
        <TodoList
          todos={todos}
          onRemoveTodo={onRemoveTodo}
          onToggleCheckbox={onToggleCheckbox}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
