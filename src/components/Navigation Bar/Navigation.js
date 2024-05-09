import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <header className="header" >
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/ktsfamily">Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
