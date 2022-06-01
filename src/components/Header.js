import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/about">Quote</Link>
        <Link to="/">Home</Link>
        <Link to="/Calculator">Calculator</Link>
      </nav>
    </header>
  );
}
