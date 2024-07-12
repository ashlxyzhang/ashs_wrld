import Svgs from "./SVG";

interface Props {
  img: string;
  number: number;
  name: string;
  caption: string;
  date: string;
  git: string;
  web: string;
  svgs: string[];
}

const Project = ({
  img,
  number,
  name,
  caption,
  date,
  git,
  web,
  svgs,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex lg:w-2/5 items-center">
        <img src={img} alt="" className="shadow-md" />
      </div>
      <div className="flex flex-col justify-around lg:w-3/5">
        <div className="flex mb-3">
          <div className="mr-3">
            <div className="flex font-bold mb-3 gap-2">
              <p className="text-pink-300">
                {number.toString().padStart(2, "0")}
              </p>
              <p>{name.toLocaleUpperCase()}</p>
            </div>
            <p>{caption}</p>
          </div>
          <div className="text-gray-400">{date}</div>
        </div>
        <div className="flex justify-between items-end gap-4">
          <div className="flex gap-4">
            {svgs.map((svg, index) =>
              svg.includes("https") ? (
                <img className="h-6" src={svg} key={index} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-slate-600"
                  key={index}
                >
                  <path d={svg} />
                </svg>
              )
            )}
          </div>
          <div className="flex gap-2">
            <a href={git} target="_blank" rel="noopener noreferrer">
              <svg
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 fill-none stroke-2 stroke-pink-300 hover:stroke-pink-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={Svgs.github}></path>
              </svg>
            </a>
            <a href={web} target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 fill-none stroke-2 stroke-pink-300 hover:stroke-pink-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={Svgs.globe}></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
