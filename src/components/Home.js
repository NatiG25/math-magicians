import React from 'react';
import studyHome from '../images/studyHome.jpeg';

export default function Home() {
  return (
    <>
      <main>
        <div className="home-content">
          <h2 className="home-title">Welcome to our online calculator!</h2>
          <p className="home-description">
            Whether you are a student, business owner, or just someone who wants
            to make quick calculations on the go, our calculator has got you covered.
          </p>
          <p className="home-description">
            It is a Single Page App (SPA) that allows users to:
          </p>
          <ul className="home-list">
            <li className="home-item">
              Perform basic arithmetic operations.
            </li>
            <li className="home-item">
              Read a random math-related quote.
            </li>
          </ul>
        </div>

        <img src={studyHome} alt="Home page logo" className="home-img" />
      </main>
    </>
  );
}
