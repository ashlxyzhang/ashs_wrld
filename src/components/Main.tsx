import React from "react";
import "../styling/Main.css";

const Main = () => {
  return (
    <>
      <nav>
        <ul>
          <li>projects</li>
          <li>blender</li>
          <li>cv</li>
        </ul>
      </nav>
      <div className="flex gap-4 m-4 fade-in">
        <div className="w-8/12 p-4 bg-yellow-100">hello</div>
        <div className="w-4/12 p-4 bg-green-100">
          <p className="underline">PROJECTS</p>
          <br />
          <p>Email</p>
          <p>Instagram</p>
        </div>
      </div>
    </>
  );
};

export default Main;
