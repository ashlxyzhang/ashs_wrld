import { useEffect, useState } from "react";
import "../styling/Main.css";
import Header from "./Header";

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
      <div className="flex flex-col lg:flex-row h-screen justify-between">
        <div className="flex flex-col text-center justify-center items-center gap-8 p-24 lg:w-[55%]">
          <h1 className="inter font-bold text-6xl">Hi! I'm Ashley.</h1>
          <p className="inter text-2xl gray-text leading-normal font-light">
            Welcome to my website, Ash&rsquo;s World. <br /> <br />
            I&rsquo;m an incoming sophomore at Texas A&M University studying
            computer science. I love web development, cloud computing, shoegaze,
            and Blender.
          </p>
          <button className="inter nav-btn custom-btn">See my projects!</button>
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
