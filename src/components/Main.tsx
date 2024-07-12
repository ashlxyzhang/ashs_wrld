// import { useEffect, useState } from "react";
import "../styling/Main.css";
import Header from "./Header";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import Socials from "./Socials";

const Main = () => {
  // const [currImg, setCurrImg] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrImg((prevImg) => (prevImg + 1) % 34);
  //   }, 200);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <main className="flex w-full justify-center fade-in">
      <div className="flex flex-col w-[768px] mx-6 md:px-0 min-h-dvh">
        <Header />
        <main className="flex flex-col items-center w-full h-full gap-16">
          <section className="flex flex-col justify-between gap-8">
            <h1 className="times italic text-7xl sm:text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(100,0,0,0.8)]">
              <strong>Ashley Zhang</strong>
            </h1>
            <p className="text-l sm:text-xl w-full sm:w-3/4 helv font-light">
              Hi! I&rsquo;m Ashley. I&rsquo;m currently pursuing a B.S. in
              Computer Science with a minor in Statistics through the Texas A&M
              Engineering Honors program. <br /> <br />
              I'm experienced in full-stack web development, cloud computing,
              scripting, and web scraping. For Summer 2025, I&rsquo;m looking
              for software engineering or quant development internships.
            </p>
            <Socials />
            {/* <Link className="nav-btn custom-btn" to="/projects">
            See my projects!
          </Link> */}
          </section>
          {/* <div className="flex items-end">
            <img
              src={`animation/${currImg.toString().padStart(4, "0")}.png`}
              alt={`Frame ${currImg}`}
              className="object-contain"
            />
          </div> */}
        </main>
        <Footer />
      </div>
    </main>
  );
};

export default Main;
