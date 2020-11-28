import React from "react";
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper cyan lighten-1 padding2rem">
        <a href="/" className="brand-logo">
          React+TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">To-do list</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
