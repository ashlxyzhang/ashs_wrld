import React, { useState } from "react";
import "../../styling/Fishing.css";

const Nine = () => {
  const [clicked, setClicked] = useState(false);
  const [getObj, setGetObj] = useState(false);
  const [obj, setObj] = useState("");
  const [inv, setInv] = useState(["", "", "", "", "", "", "", "", ""]);
  const [index, setIndex] = useState(0);

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
      setObj(findObj(objs));
    }, 2000);
  };

  const addInv = (ind: number) => {
    if (obj !== "" && ind < 9) {
      const updatedInv = [...inv];
      updatedInv[ind] = obj;
      setIndex(index + 1);
      setInv(updatedInv);
    }
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
        <span className={`fished ${getObj ? "" : "d-none"}`}>{`  ${obj}`}</span>
        {
          "   ,(   ,(   ,(   ,(   ,(   ,(   ,(   ,(\n`-'  `-'  `-'  `-'  `-'  `-'  `-'  `-'  `"
        }
        <div>
          <button onClick={moveRod}>Fish</button>
          <button onClick={() => addInv(index)}>Add to Inventory</button>
        </div>
      </div>
      <div className="container text-center flex-wrap inventory">
        <img src="/Advent/layout3.png" alt="" />
        <div className="row">
          <h4>Inventory</h4>
        </div>
        <div className="row justify-content-center grid">
          {inv.map((item, index) => (
            <div
              key={index}
              className="col-3"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 45,
                alignItems: "center",
              }}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nine;
