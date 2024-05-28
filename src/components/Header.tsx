import { Link } from "react-router-dom";
import "../styling/Main.css";
const Header = () => {
  return (
    <div className="flex header w-100 justify-between text-lg font-normal pt-12">
      <div className="flex pl-24 gap-3 items-center">
        <p className="">Ash&rsquo;s World</p>
        <Link to="/main">
          <svg
            className="w-6 h-6 fill-none stroke-2 stroke-[#e79a8f] hover:stroke-[#BF6E64]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M3.6 9h16.8"></path>
            <path d="M3.6 15h16.8"></path>
            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
          </svg>
        </Link>
      </div>

      <div className="flex gap-12 pr-24">
        <Link className="nav-btn" to="/projects">
          Projects
        </Link>
        <Link className="nav-btn" to="/advent">
          Calendar
        </Link>
        <button className="nav-btn">Resume</button>
        <button className="nav-btn">Blender</button>
      </div>
    </div>
  );
};

export default Header;
