import { useEffect, useState } from "react";
import "../styling/Main.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const Main = () => {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImg((prevImg) => (prevImg + 1) % 34);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fade-in">
      <img className="bg-main" src="Home/ombre_bg.png" alt="" />
      <Header />
      <div className="inter flex flex-col lg:flex-row h-screen justify-center items-center">
        <div className="flex flex-col justify-center gap-8 p-24 lg:w-[55%]">
          <h1 className="font-bold times italic bold text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(100,0,0,0.8)] w-4/5">
            Ashley Zhang
          </h1>
          <p className="text-xl helv leading-normal font-light w-4/5">
            Hi! I&rsquo;m Ashley. I&rsquo;m currently pursuing a B.S. in
            Computer Science with a minor in Statistics through the Texas A&M
            Engineering Honors program. <br /> <br />
            I'm experienced in full-stack web development, cloud computing,
            scripting, and web scraping. For Summer 2025, I&rsquo;m looking for
            software engineering or quant development internships.
          </p>
          {/* <Link className="nav-btn custom-btn" to="/projects">
            See my projects!
          </Link> */}
        </div>
        <div className="flex items-end lg:w-[45%]">
          <img
            src={`animation/${currImg.toString().padStart(4, "0")}.png`}
            alt={`Frame ${currImg}`}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
