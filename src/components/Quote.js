import React from "react";

export default function Quote() {
  const quotes = [
    {
      id: 1,
      quote: `Mathematics is not about numbers, equations, computations, or
      algorithms: it is about understanding.`,
      mathematician: "Willam Paul Thurston",
    },
    {
      id: 2,
      quote: `Pure mathematics is, in its way, the poetry of logical ideas.`,
      mathematician: "Albert Einstein",
    },
    {
      id: 3,
      quote: `There are two ways to do great mathematics. The first is to be smarter than everybody else. The second way is to be stupider than everybody else but persistent.`,
      mathematician: "Raoul Bott",
    },
    {
      id: 4,
      quote: `Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost.`,
      mathematician: "Ronald Graham",
    },
    {
      id: 5,
      quote: `The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.`,
      mathematician: "Charles Caleb Colton",
    },
    {
      id: 6,
      quote: `Mathematics is the queen of sciences and arithmetic is the queen of mathematics.`,
      mathematician: "Carl Friedrich Gauss",
    },
  ];
  return (
    <main>
      <p className="quote">--</p>
    </main>
  );
}
