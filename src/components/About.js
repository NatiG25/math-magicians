import React from 'react';
import Header from './Header';

export default function About() {
  return (
    <>
      <main>
        <Header />
        <p className="quote">
          Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding --Willam Paul Thurston
        </p>
      </main>
    </>
  );
}
