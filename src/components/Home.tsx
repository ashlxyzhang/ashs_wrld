import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const el = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "DAPPLED SUNLIGHT",
        "SILVER WHEAT" /* Fitzgerald */,
        "BELLS CHIME",
        "CAUGHT IN THE CURRENT",
        "LOVE THE SINNER" /* Coraline */,
        "HATE THE SIN",
      ],
      typeSpeed: 35,
      fadeOut: true,
      backDelay: 1200,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  });

  const screenClick = () => {
    nav("/galaxy");
  };

  return (
    <>
      <div onClick={screenClick} style={{ cursor: "pointer" }} className="bg">
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
    </>
  );
};

export default Home;
