import React, { useState } from "react";

const Nine = () => {
  const [clicked, setClicked] = useState(false);
  const [getObj, setGetObj] = useState(false);

  const objs = "🐡𓇼🐟💫🫧🐚🦀💌🌟🐠🐙🦑🪸⭐️🌀";

  const findObj = (objs: string) => {
    const len = objs.length - 2;
    const num = Math.floor((Math.random() * len) / 2) * 2;
    const obj = objs.slice(num, num + 2);
    return obj;
  };

  const moveRod = () => {
    setGetObj(false);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      setGetObj(true);
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
        <span className={`fished ${getObj ? "" : "d-none"}`}>{`  ${findObj(
          objs
        )}`}</span>
        {
          "   ,(   ,(   ,(   ,(   ,(   ,(   ,(   ,(\n`-'  `-'  `-'  `-'  `-'  `-'  `-'  `-'  `"
        }
        <button onClick={moveRod}>Fish</button>
      </div>
    </div>
  );
};

export default Nine;
