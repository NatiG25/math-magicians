import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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

        <div className="home-content">
          <h2>Welcome to our page!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            laudantium maiores atque, iure quasi et illum odio est. Fugiat vitae
            possimus perferendis laudantium quae quam ipsum eligendi nam provident
            reiciendis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            laudantium maiores atque, iure quasi et illum odio est. Fugiat vitae
            possimus perferendis laudantium quae quam.
          </p>
        </div>

      </main>
    </>
  );
}
