import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/quote" element={<Quote />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    );
  }
}

export default App;
