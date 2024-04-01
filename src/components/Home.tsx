import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import "../styling/Home.css";

const Home = () => {
  const el = useRef(null);
  const nav = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "DAPPLED SUNLIGHT",
        "SILVER WHEAT" /* Fitzgerald */,
        "BELLS CHIME",
        "ANGELS WEEP",
        "CAUGHT IN THE CURRENT",
        "PASSING TIME",
        "LOVE THE SINNER" /* Coraline */,
        "HATE THE SIN",
      ],
      typeSpeed: 35,
      fadeOut: true,
      backDelay: 1350,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  });

  const screenClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      nav("/main");
    }, 500);
  };

  return (
    <>
      <div className="bg vh-100" style={{ backgroundColor: "#0A080B" }}></div>
      <div
        className={fadeOut ? "fade-out" : ""}
        onClick={screenClick}
        style={{ cursor: "pointer" }}
      >
        <div className="bg">
          <video loop muted autoPlay>
            <source src="/Home/home.mp4" type="video/mp4" />
          </video>
          <div className="screen"></div>
        </div>

        <section className="caption">
          <div className="wrapper">
            <span>⋅˚₊‧ ୨୧ ‧₊˚ ⋅</span>
            <div className="center">
              <h1 className="title">୨୧ ASHS_WRLD ୨୧</h1>
              <h4 ref={el} className="title" style={{ marginTop: 50 }} />
              <span>
                The universe created by 🍎. <br /> It can't represent 1% of her.
              </span>
            </div>
            <span>⋅˚₊‧ ୨୧ ‧₊˚ ⋅</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
