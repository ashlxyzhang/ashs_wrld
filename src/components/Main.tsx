import "../styling/Main.css";
import Project from "./Project";
import getProjectCaptions from "./ProjectCaptions";

const captions = getProjectCaptions();

const projects = [
  // Fintelligent
  {
    img: "/fintelligent.png",
    name: "Fintelligent",
    caption: captions[0],
    date: "012024",
    git: "https://github.com/ashlxyzhang/tamuhack_x",
    web: "https://fintelligent.ashs.world/",
  },
  // Whimsiway
  {
    img: "/Home/galaxy2.jpeg",
    name: "Whimsiway",
    caption: captions[0],
    date: "022024",
    git: "https://github.com/ericliu-12/WhimsiWay",
    web: "",
  },
];

const Main = () => {
  return (
    <>
      <div className="flex gap-4 m-4 fade-in">
        <div className="w-8/12 p-4">
          {projects.map((project, index) => (
            <>
              <Project {...project} number={index + 1} />
              <hr className="m-8" />
            </>
          ))}
        </div>
        <div className="w-4/12 p-4">
          <p className="underline">PROJECTS</p>
          <br />
          <p>Projects I've worked on from then 'til now.</p>
          <br />
          <p>Email</p>
          <a
            href="https://www.instagram.com/ashs_wrld/"
            target="_blank"
            className="underline"
          >
            Instagram
          </a>
          <br />
          <a
            href="https://github.com/ashlxyzhang/"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
