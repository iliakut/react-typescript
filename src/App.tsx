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

  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd={onAddTodo}/>
        <TodoList todos={todos}/>
      </div>
    </React.Fragment>
  );
};

export default App;
