import React, { useState } from "react";

const Fifteen = () => {
  const [show, setShow] = useState(0);
  const fortunes = [
    "Follow your most intense obsessions mercilessly.",
    "I am a cage, in search of a bird.",
    "Anyone who keeps the ability to see beauty never grows old.",
    "A book must be the axe for the frozen sea within us.",
    "I am free and that is why I am lost.",
    "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
    "All language is but a poor translation.",
    "I have the true feeling of myself only when I am unbearably unhappy.",
    "By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired.",
  ];

  const handleClick = () => {
    setShow(show + 1);
  };

  const reset = () => {
    setShow(0);
  };

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <span className={show === 0 ? "m-4" : "d-none"}>
        Click me to crack open.
      </span>
      <img
        className={show === 0 ? "" : "d-none"}
        src="/Advent/fortune.jpeg"
        alt="fortune cookie"
        onClick={handleClick}
      />
      <span className={show === 1 ? "m-4" : "d-none"}>
        Click me to read your fortune.
      </span>
      <img
        className={show === 1 ? "m-4" : "d-none"}
        src="/Advent/fortune_2.png"
        alt="open fortune"
        onClick={handleClick}
      />
      <span
        className={show >= 2 ? "m-4" : "d-none"}
        style={{ width: 400, color: "#244684", textAlign: "center" }}
        onClick={reset}
      >
        {fortunes[Math.floor(Math.random() * fortunes.length)]}
      </span>
      <img
        className={show >= 2 ? "m-4" : "d-none"}
        style={{ width: 500, position: "fixed", zIndex: -1 }}
        src="/Advent/fortune_3.png"
        alt="fortune message"
      />
    </div>
  );
};

export default Fifteen;
