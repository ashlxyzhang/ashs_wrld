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
              <p className="underline">{name.toLocaleUpperCase()}</p>
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
            <a href={git} target="_blank">
              <svg
                className="w-6 h-6 fill-none stroke-2 stroke-pink-300 hover:stroke-pink-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a href={web} target="_blank">
              <svg
                className="w-6 h-6 fill-none stroke-2 stroke-pink-300 hover:stroke-pink-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
