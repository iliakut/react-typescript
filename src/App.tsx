import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TodosPage from "./pages/todosPage";
import AboutPage from "./pages/aboutPage";

// тип FC - функциональный компонент
const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact/>
          <Route component={AboutPage} path="/about"/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
