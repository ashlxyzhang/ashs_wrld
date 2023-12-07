import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import galaxy from "/Home/galaxy.txt";

const Home = () => {
  const [galaxyText, setGalaxyText] = useState("");

  useEffect(() => {
    fetch("/Home/galaxy.txt")
      .then((response) => response.text())
      .then((text) => setGalaxyText(text))
      .catch((error) => console.error("Error fetching galaxy:", error));
  }, []);

  return (
    <>
      <div className="bg">
        <video loop muted autoPlay>
          <source src="/Home/home.mp4" type="video/mp4" />
        </video>
        <div className="screen"></div>
      </div>
      {/* <div
        className="container d-flex align-items-center justify-content-center"
        style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: 4 }}
      >
        {galaxyText}
      </div> */}
      <section className="caption">
        <div className="wrapper">
          <span>⋅˚₊‧ ୨୧ ‧₊˚ ⋅</span>
          <h1 className="title">୨୧ ASHS_WRLD ୨୧</h1>
          <span>
            The universe created by 🍎. <br /> It can't represent 1% of her.
          </span>
          <span>⋅˚₊‧ ୨୧ ‧₊˚ ⋅</span>
        </div>
      </section>
    </>
  );
};

export default Home;
