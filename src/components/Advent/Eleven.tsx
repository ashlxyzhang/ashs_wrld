import { useState } from "react";
import "../../styling/Dream.css";

const Eleven = () => {
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);

  const imgs = ["dream.jpeg", "poppies.jpeg", "poppies2.gif", "dorothy.jpeg"];
  const texts = [
    "[ You wake up from a dream. ]",
    "[ You find yourself in a field of poppies. ]",
    "[ You start feeling a little sleepy... ]",
    "[ You settle down for a long, long nap. ]",
  ];

  const handleClick = () => {
    setIndex(index + 1);
    if (index === 2) setShowButton(false);
  };

  return (
    <>
      <div className="bg">
        <div className="screen"></div>
        <img src={`/Advent/${imgs[index]}`} alt="dream" />
      </div>
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center fade-in text">
        <span>{texts[index]}</span>
        <button
          className={showButton ? "dream-button" : "d-none"}
          onClick={handleClick}
        >
          Go forth
        </button>
      </div>
    </>
  );
};

export default Eleven;
