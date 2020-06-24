import React, {useState} from 'react';
import Navbar from "./components/navbar";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

// тип FC - функциональный компонент
const App: React.FC = () => {
  const [todos, setTodos] = useState<[]>([]);

  const onAddTodo = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos([newTodo, ...todos])
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
