import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import galaxy from "/Home/galaxy.txt";

const Home = () => {
  const [galaxyText, setGalaxyText] = useState("");

  useEffect(() => {
    fetch("/Home/galaxy.txt")
      .then((response) => response.text())
      .then((text) => setGalaxyText(text))
      .catch((error) => console.error("Error fetching galaxy:", error));
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/phonebook">Phonebook</Link>
          </li>
          <li>
            <Link to="/italy">Italy Scrapbook</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: 4 }}
      >
        {galaxyText}
      </div>
    </>
  );
};

export default Home;
