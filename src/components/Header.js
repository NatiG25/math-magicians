import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link className="nav-border" to="/Calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
  );
}
