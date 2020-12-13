import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
      <div className = "navbar">
        <div className="logo">
          <h1>Weather</h1>
        </div>
        <div>
        <ul className = "container">
            <li> <NavLink className = "nav__link" to="/">Home</NavLink></li>
            <li><NavLink className = "nav__link" to="/about">About</NavLink></li>
            <li><NavLink className = "nav__link" to="/contact">Contact</NavLink></li>
        </ul>
        </div>
        
      </div>

  );
};