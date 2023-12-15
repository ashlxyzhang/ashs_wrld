import React, { useState } from "react";
import "../../styling/Quilt.css";

const Thirteen = () => {
  const [patches, setPatches] = useState<number[]>([]);

  const handleClick = (patch: number) => {
    setPatches((prev) => [...prev, patch]);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="quilt d-flex flex-wrap justify-content-start align-items-center">
        <div className="quilt-border quilt"></div>
        {patches.map((patch, index) => (
          <div key={index}>
            <img className="patch" src={`/Advent/quilt/patch${patch}.png`} />
          </div>
        ))}
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span className="mb-4" style={{ fontSize: 20 }}>
          Make a quilt!
        </span>
        <span>Patches</span>
        <div className="d-flex flex-wrap patch-container justify-content-center align-items-center">
          {Array.from({ length: 11 }, (_, index) => 1 + index).map(
            (patch, index) => (
              <img
                className="patch m-2 p-2"
                src={`/Advent/quilt/patch${patch}.png`}
                key={index}
                onClick={() => handleClick(patch)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Thirteen;
