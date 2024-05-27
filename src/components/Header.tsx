import React from "react";

const Header = () => {
  return (
    <div className="flex w-100 justify-between inter text-xl font-medium">
      <div className="flex pl-24 p-16 gap-3 items-center">
        <p className="">Ash&rsquo;s World</p>
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
      </div>

      <div className="flex gap-12 pr-24 p-16">
        <button>Projects</button>
        <button>Calendar</button>
        <button>Resume</button>
        <button>Blender</button>
      </div>
    </div>
  );
};

export default Header;
