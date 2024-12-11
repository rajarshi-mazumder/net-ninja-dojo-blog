import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </nav>
  );
};
