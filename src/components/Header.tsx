import { Link } from "react-router-dom";
import "../styling/Main.css";
import svgs from "./SVG";

const Header = () => {
  return (
    <nav className="flex justify-between w-full md:w-[768px] py-8 mb-4">
      <div className="flex gap-3 items-center">
        <p className="hidden md:block lg:block">Ash&rsquo;s World</p>
        <Link to="/">
          <svg
            className="w-6 h-6 fill-none stroke-2 stroke-orange hover:stroke-dark-orange"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svgs.globe}></path>
          </svg>
        </Link>
      </div>
      <div className="flex gap-4 sm:gap-8">
        <Link className="hover:text-orange" to="/projects">
          Projects
        </Link>
        {/* <Link className="nav-btn" to="/advent">
          Calendar
        </Link> */}
        <a
          href="/ashley_zhang.pdf"
          className="hover:text-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <button className="hover:text-orange">Blender</button>
      </div>
    </nav>
  );
};

export default Header;
