import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}

function Home() {
  return (
    <>
      <main>
        <h1>Math Magicians</h1>
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
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h1>Math Magicians</h1>
        <h2>Welcome to our page!</h2>
        <p>
          Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding --Willam Paul Thurston
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
