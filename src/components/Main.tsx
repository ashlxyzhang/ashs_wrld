import "../styling/Main.css";
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

const Main = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 m-4 fade-in">
        <div className="md:w-8/12 p-4">
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
        <div className="p-4">
          <p className="underline">PROJECTS</p>
          <br />
          <p>Projects I've worked on from then 'til now.</p>
          <br />
          <Modal />
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
