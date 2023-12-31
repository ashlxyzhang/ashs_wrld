import React, { useState } from "react";

const Seventeen = () => {
  const [cards, setCards] = useState<string[]>([]);
  const deck = [
    "I",
    "II",
    "III",
    "IIII",
    "V",
    "VI",
    "VII",
    "VIII",
    "VIIII",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIIII",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XVIIII",
    "XX",
    "XXI",
    "fool",
  ];

  const draw = () => {
    if (cards.length < 3) {
      let current = deck[Math.floor(Math.random() * deck.length)];
      while (cards.includes(current)) {
        current = deck[Math.floor(Math.random() * deck.length)];
      }
      setCards((prev) => [...prev, current]);
    }
  };

  const clear = () => {
    setCards([]);
  };

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <div>
        {cards.map((card, index) => (
          <img
            className="fade-in m-2"
            src={`/Advent/cards/${card}.jpeg`}
            alt=""
            key={index}
          />
        ))}
      </div>
      <img
        className="rotate"
        src="/Advent/cards/back.jpeg"
        alt="card backing"
      />
      <div className="d-flex flex-wrap m-4">
        <button className="m-2">Shuffle</button>
        <button onClick={draw} className="m-2">
          Draw
        </button>
        <button onClick={clear} className="m-2">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Seventeen;
