import React, { useState } from 'react';

// Import images
import albert from '../images/mathematicians/AlbertEinstein.jpeg';
import quoteLogo from '../images/quote-logo.png';
import study from '../images/study.jpeg';

export default function Quote() {
  const [quoteArrNum, setQuoteId] = useState(0);
  const quotes = [
    {
      id: 1,
      img: albert, // TODO fix the img src link
      description: `MATHEMATICS IS NOT ABOUT NUMBERS, EQUATIONS, COMPUTATIONS, OR
      ALGORITHMS: IT IS ABOUT UNDERSTANDING.`,
      mathematician: 'WILLIAM PAUL THURSTON',
    },
    {
      id: 2,
      img: albert,
      description:
        'PURE MATHEMATICS IS, IN ITS WAY, THE POETRY OF LOGICAL IDEAS.',
      mathematician: 'ALBERT EINSTEIN',
    },
    {
      id: 3,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        `THERE ARE TWO WAYS TO DO GREAT MATHEMATICS. THE FIRST IS TO BE SMARTER THAN EVERYBODY ELSE.
        THE SECOND WAY IS TO BE STUPIDER THAN EVERYBODY ELSE BUT PERSISTENT.`,
      mathematician: 'RAOUL BOTT',
    },
    {
      id: 4,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'MATHEMATICS IS NOT A CAREFUL MARCH DOWN A WELL-CLEARED HIGHWAY, BUT A JOURNEY INTO A STRANGE WILDERNESS, WHERE THE EXPLORERS OFTEN GET LOST.',
      mathematician: 'RONALD GRAHAM',
    },
    {
      id: 5,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'THE STUDY OF MATHEMATICS, LIKE THE NILE, BEGINS IN MINUTENESS BUT ENDS IN MAGNIFICENCE.',
      mathematician: 'CHARLES CALEB COLTON',
    },
    {
      id: 6,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'MATHEMATICS IS THE QUEEN OF SCIENCES AND ARITHMETIC IS THE QUEEN OF MATHEMATICS.',
      mathematician: 'CARL FRIEDRICH GAUSS',
    },
  ];

  const changeQuote = () => {
    setQuoteId(quoteArrNum < 5 ? quoteArrNum + 1 : 0);
  };

  return (
    <>
      <ul className="quote-list">
        <li key={quotes[quoteArrNum].id} className="quote-item">
          <div className="quote-content">
            <div className="quote-logo">
              <img src={quoteLogo} alt="quote logo" />
            </div>
            <p className="quote-description">
              “
              {quotes[quoteArrNum].description}
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
