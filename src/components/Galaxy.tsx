import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling/Galaxy.css";

const Galaxy = () => {
  const [galaxyText, setGalaxyText] = useState("");

  useEffect(() => {
    fetch("/Home/galaxy.txt")
      .then((response) => response.text())
      .then((text) => setGalaxyText(text))
      .catch((error) => console.error("Error fetching galaxy:", error));
  }, []);

  return (
    <div className="galaxy">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/advent">Advent</Link>
        </li>
        <li>
          <Link to="/phonebook">Phonebook</Link>
        </li>
      </nav>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ fontSize: 5 }}
      >
        {galaxyText}
      </div>
    </div>
  );
};

export default Galaxy;
