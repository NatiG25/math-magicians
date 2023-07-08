import React from 'react';
import studyHome from '../images/studyHome.jpeg';

export default function Home() {
  return (
    <>
      <main>
        <div className="home-content">
          <h2 className="home-title">Welcome to our page!</h2>
          <p className="home-description">
            &quot;Math Magicians&ldquo; is a website for all fans of mathematics.
          </p>
          <p className="home-description">
            It is a Single Page App (SPA) that allows users to:
          </p>
          <ul className="home-list">
            <li className="home-item">
              Make simple calculations.
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
