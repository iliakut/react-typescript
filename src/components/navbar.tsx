import React from "react";
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-4">
        <a href="/" className="brand-logo">React + Typescript</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">Todo list</NavLink></li>
          <li><NavLink to="/about">Information</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
