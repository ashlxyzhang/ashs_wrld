import Modal from "./Modal";
import svgs from "./SVG";

const Socials = () => {
  return (
    <div className="flex gap-4">
      <Modal />
      <a
        href="https://linkedin.com/in/ashley-j-zhang/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <svg
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 md:w-10 md:h-10 stroke-2 fill-none stroke-slate-600 hover:stroke-orange"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgs.linkedin}></path>
        </svg>
      </a>
      <a
        href="https://github.com/ashlxyzhang/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <svg
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 md:w-10 md:h-10 stroke-2 fill-none stroke-slate-600 hover:stroke-orange"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgs.github}></path>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/ashs_wrld/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <svg
          viewBox="4 4 24 24"
          className="w-8 h-8 md:w-10 md:h-10 fill-slate-600 hover:fill-orange"
        >
          <path d={svgs.instagram} />
        </svg>
      </a>
    </div>
  );
};

export default Socials;
