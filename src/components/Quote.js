import React from 'react';

export default function Quote() {
  const quotes = [
    {
      id: 1,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc', // TODO fix the img src link
      description: `Mathematics is not about numbers, equations, computations, or
      algorithms: it is about understanding.`,
      mathematician: 'Willam Paul Thurston',
    },
    {
      id: 2,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'Pure mathematics is, in its way, the poetry of logical ideas.',
      mathematician: 'Albert Einstein',
    },
    {
      id: 3,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'There are two ways to do great mathematics. The first is to be smarter than everybody else. The second way is to be stupider than everybody else but persistent.',
      mathematician: 'Raoul Bott',
    },
    {
      id: 4,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost.',
      mathematician: 'Ronald Graham',
    },
    {
      id: 5,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.',
      mathematician: 'Charles Caleb Colton',
    },
    {
      id: 6,
      img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc',
      description:
        'Mathematics is the queen of sciences and arithmetic is the queen of mathematics.',
      mathematician: 'Carl Friedrich Gauss',
    },
  ];
  return (
    <ul className="quote-container">
      {quotes.map((quote) => (
        <li key={quote.id} className="quote-item">
          <img src={quote.img} className="quote-img" alt="Mathematician" />
          <h3 className="quote-title">{quote.mathematician}</h3>
          <p className="quote-description">{quote.description}</p>
        </li>
      ))}
    </ul>
  );
}
