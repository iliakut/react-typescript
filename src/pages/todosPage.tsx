import React, {useEffect, useState} from "react";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import {ITodo} from "../interfaces";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

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
      <TodoForm onAdd={onAddTodo}/>
      <TodoList
        todos={todos}
        onRemoveTodo={onRemoveTodo}
        onToggleCheckbox={onToggleCheckbox}
      />
    </React.Fragment>
  );
};

export default TodosPage;
