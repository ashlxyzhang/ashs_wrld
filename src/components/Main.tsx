import { useEffect, useState } from "react";
import { SequenceAnimator } from "react-sequence-animator";

const Main = () => {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImg((prevImg) => (prevImg + 1) % 34);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src={`animation/${currImg.toString().padStart(4, "0")}.png`}
        alt={`Frame ${currImg}`}
        className="h-screen float-right"
      />
    </div>
  );
};

export default Main;
