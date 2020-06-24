import React from 'react';
import Navbar from "./components/navbar";
import TodoForm from "./components/todoForm";

// тип FC - функциональный компонент
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <TodoForm></TodoForm>
      </div>
    </React.Fragment>
  );
};

export default App;
