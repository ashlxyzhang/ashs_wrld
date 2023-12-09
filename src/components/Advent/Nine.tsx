import React, { useState } from "react";

const Nine = () => {
  const [clicked, setClicked] = useState(false);

  const moveRod = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ fontFamily: "Courier New" }}
    >
      <div className="fishing d-flex flex-column justify-content-center align-items-center">
        <img
          className={clicked ? "move-rod" : ""}
          src="/Advent/fishing_pole.webp"
          alt="fishing pole"
        />
        <br />
        {
          "   ,(   ,(   ,(   ,(   ,(   ,(   ,(   ,(\n`-'  `-'  `-'  `-'  `-'  `-'  `-'  `-'  `"
        }
        <button onClick={moveRod}>Fish</button>
      </div>
    </div>
  );
};

export default Nine;
