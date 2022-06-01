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
        <div className="header">
          <h1>Math Magicians</h1>
          <nav>
            <Link to="/about">Quote</Link>
            <Link to="/">Home</Link>
            <Link to="/Calculator">Calculator</Link>
          </nav>
        </div>
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
    </>
  );
}

function About() {
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

export default App;
