import React from 'react';
import Header from './Header';

export default function Home() {
  return (
    <>
      <main>
        <Header />
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
