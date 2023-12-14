import React from "react";
import "../../styling/Quilt.css";

const Thirteen = () => {
  const patches = ["patch1"];
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      Make a quilt!
      <div>
        <span>Patches</span>
        {Array.from({ length: 11 }, (_, index) => 1 + index).map(
          (patch, index) => (
            <img
              className="patch"
              src={`/Advent/quilt/patch${patch}.png`}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Thirteen;
