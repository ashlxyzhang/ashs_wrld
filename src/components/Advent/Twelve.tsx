import { useState } from "react";
import chroma from "chroma-js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../styling/Smoothie.css";

const Twelve = () => {
  const ingredients = "🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍍🫐🥝🥥🥛🥑🍨🍠";
  const colors = [
    "DC2424", // apple
    "7CBB2D", // green apple
    "E48532", // orange
    "FBD438", // lemon
    "CB2236", // cherry
    "BE4279", // grape
    "E2454A", // watermelon
    "B31D1A", // strawberry
    "F68244", // peach
    "E4E4A6", // melon
    "FCE16A", // banana
    "CBCF58", // pear
    "D28930", // pineapple
    "84BCF8", // blueberry
    "A5BD40", // kiwi
    "E4E1D5", // coconut
    "FCFBF7", // milk
    "E8E868", // avocado
    "EED4A0", // ice cream
    "EED4A0", // yam
  ];
  const ingredientArr = [...ingredients];
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [colorList, setColorList] = useState<string[]>([]);

  const handleClick = (ingredient: string, index: number) => {
    if (ingredientList.length < 3) {
      setIngredientList((prev) => [ingredient, ...prev]);
      setColorList((prev) => [...prev, colors[index]]);
    }
  };

  const getColor = () => {
    if (colorList.length > 2) {
      return chroma.average(colorList).css();
    }
  };

  const clear = () => {
    setIngredientList([]);
    setColorList([]);
  };

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/Advent/blender.jpeg"
            alt="blender"
            style={{ height: "50vh", padding: 30 }}
          />
          <div
            className="d-flex flex-column"
            style={{
              marginTop: "-150px",
              position: "fixed",
              fontSize: 40,
            }}
          >
            {ingredientList.map((ingredient, index) => (
              <span key={index}>{ingredient}</span>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Popup
              trigger={
                <button style={{ width: 50, marginRight: 20 }}>Blend</button>
              }
              className="popup-content"
              modal
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                <span>{"Enjoy your smoothie <3"}</span>
                <div
                  className="filter d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: getColor(),
                  }}
                ></div>
                <img src="/Advent/smoothie.png" alt="smoothie" id="smoothie" />
              </div>
            </Popup>
            <button onClick={clear}>Clear</button>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span>Choose 3 Ingredients.</span>
          <div
            className="d-flex flex-wrap justify-content-center align-items-center p-3"
            style={{ width: "35vw" }}
          >
            {ingredientArr.map((ingredient, index) => (
              <>
                <span
                  key={index}
                  onClick={() => handleClick(ingredient, index)}
                  style={{ cursor: "pointer", fontSize: 50 }}
                >
                  {ingredient}
                </span>
                {/* {ingredient === "🍌" && <div className="w-100"></div>} */}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Twelve;
