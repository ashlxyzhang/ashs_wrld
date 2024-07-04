import "../styling/Main.css";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import Project from "./Project";
import getProjectCaptions from "./ProjectCaptions";
import svgs from "./SVG";

const captions = getProjectCaptions();

const projects = [
  // Fintelligent
  {
    img: "/fintelligent.png",
    name: "Fintelligent",
    date: "012024",
    git: "https://github.com/ashlxyzhang/tamuhack_x",
    web: "https://fintelligent.ashs.world/",
    svgs: [svgs.react, svgs.typescript, svgs.plaid],
  },
  // Whimsiway
  {
    img: "/whimsiway.png",
    name: "Whimsiway",
    date: "022024",
    git: "https://github.com/ericliu-12/WhimsiWay",
    web: "https://whimsiway.ashs.world/",
    svgs: [svgs.flask, svgs.react, svgs.express],
  },
  {
    img: "/collections.png",
    name: "Curious Collections",
    date: "032024",
    git: "https://github.com/ashlxyzhang/build4good",
    web: "https://collections.ashs.world/",
    svgs: [svgs.notion, svgs.spotify, svgs.tailwind],
  },
];

const Projects = () => {
  return (
    <main className="w-full flex justify-center fade-in">
      <div className="flex flex-col max-w-screen-xl mx-6 min-h-dvh">
        <div className="flex w-full justify-center">
          <Header />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 sm:mx-4">
          <div className="md:w-8/12">
            {projects.map((project, index) =>
              index != projects.length - 1 ? (
                <>
                  <Project
                    {...project}
                    number={index + 1}
                    caption={captions[index]}
                    key={index}
                  />
                  <hr className="m-8" key={index + 1} />
                </>
              ) : (
                <Project
                  {...project}
                  number={index + 1}
                  caption={captions[index]}
                  key={index}
                />
              )
            )}
          </div>
          <div className="flex flex-col md:w-4/12 sm:mx-6 gap-4">
            <p className="font-bold times italic text-6xl sm:text-7xl text-white drop-shadow-[0_1.2px_1.2px_rgba(100,0,0,0.8)]">
              Projects
            </p>
            <Modal />
            <a
              href="https://www.instagram.com/ashs_wrld/"
              target="_blank"
              className="underline"
            >
              Instagram
            </a>
            <a
              href="https://github.com/ashlxyzhang/"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Projects;
