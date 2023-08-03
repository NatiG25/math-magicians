import React, { useEffect, useState } from 'react';

// Import images
import quoteLogo from '../images/quote-logo.png';
import study from '../images/study.jpeg';

export default function Quote() {
  const [quoteArrNum, setQuoteId] = useState(0);
  const [quoteApi, setQuoteApi] = useState();
  const loader = document.querySelector('#loading');
  const quoteDescription = document.querySelector('.quote-description');
  const displayLoading = () => {
    loader.classList.add('display');
    quoteDescription.classList.add('hide-quote');
  };

  const hideLoading = () => {
    quoteDescription.classList.remove('hide-quote');
    loader.classList.remove('display');
  };

  const apiUrl = 'https://mathematics-quotes-api.onrender.com/api/v1/quotes';

  const fetchQuote = async () => {
    displayLoading();
    try {
      const getQuote = await fetch(apiUrl);
      const res = await getQuote.json();
      const { quote } = res[0];
      hideLoading();
      return setQuoteApi(quote.toUpperCase());
    } catch (error) {
      return setQuoteApi(null);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const quotes = [
    {
      id: 1,
      description: `MATHEMATICS IS NOT ABOUT NUMBERS, EQUATIONS, COMPUTATIONS, OR
      ALGORITHMS: IT IS ABOUT UNDERSTANDING.`,
      mathematician: 'WILLIAM PAUL THURSTON',
    },
    {
      id: 2,
      description:
        'PURE MATHEMATICS IS, IN ITS WAY, THE POETRY OF LOGICAL IDEAS.',
      mathematician: 'ALBERT EINSTEIN',
    },
    {
      id: 3,
      description:
        `THERE ARE TWO WAYS TO DO GREAT MATHEMATICS. THE FIRST IS TO BE SMARTER THAN EVERYBODY ELSE.
        THE SECOND WAY IS TO BE STUPIDER THAN EVERYBODY ELSE BUT PERSISTENT.`,
      mathematician: 'RAOUL BOTT',
    },
    {
      id: 4,
      description:
        'MATHEMATICS IS NOT A CAREFUL MARCH DOWN A WELL-CLEARED HIGHWAY, BUT A JOURNEY INTO A STRANGE WILDERNESS, WHERE THE EXPLORERS OFTEN GET LOST.',
      mathematician: 'RONALD GRAHAM',
    },
    {
      id: 5,
      description:
        'THE STUDY OF MATHEMATICS, LIKE THE NILE, BEGINS IN MINUTENESS BUT ENDS IN MAGNIFICENCE.',
      mathematician: 'CHARLES CALEB COLTON',
    },
    {
      id: 6,
      description:
        'MATHEMATICS IS THE QUEEN OF SCIENCES AND ARITHMETIC IS THE QUEEN OF MATHEMATICS.',
      mathematician: 'CARL FRIEDRICH GAUSS',
    },
  ];

  const changeQuote = () => {
    if (quoteApi) fetchQuote();
    else setQuoteId(quoteArrNum < 5 ? quoteArrNum + 1 : 0);
  };

  return (
    <>
      <ul className="quote-list">
        <li key={quotes[quoteArrNum].id} className="quote-item">
          <div className="quote-content">
            <div className="quote-logo">
              <img src={quoteLogo} alt="quote logo" />
            </div>
            <div id="loading">Loading...</div>
            <p className="quote-description">
              “
              {quoteApi || quotes[quoteArrNum].description}
              ”
            </p>
            <div className="author">
              <span>__</span>
              <span>{quotes[quoteArrNum].mathematician}</span>
            </div>
          </div>
        </li>
        <li className="new-quote-btn">
          <button type="button" onClick={changeQuote}>New quote</button>
        </li>
      </ul>
      <img src={study} alt="study" className="study-img" />
    </>
  );
}
