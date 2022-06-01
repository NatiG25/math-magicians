import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <main>
        <div className="header">
          <h1>Math Magicians</h1>
          <nav>
            <Link to="/about">Quote</Link>
            <Link to="/">Home</Link>
            <Link to="/Calculator">Calculator</Link>
          </nav>
        </div>
        <p className="quote">
          Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding --Willam Paul Thurston
        </p>
      </main>
    </>
  );
}
