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
      <div className="d-flex fade-in vh-100 align-items-center justify-content-center">
        <img
          className="bg"
          id="gal-img"
          src="/Home/galaxy2.jpeg"
          alt="spiral galaxy"
        />
        <span className="galaxy-text">{galaxyText}</span>
        <div className="dest-cont" style={{ marginBottom: 20 }}>
          <Link to="/" className="destination" title="Earth (Home)">
            🌎
          </Link>
          <span className="dest-cap" style={{ marginLeft: 50 }}>
            Earth (Home)
          </span>
        </div>
        <div
          className="dest-cont"
          style={{ marginBottom: 170, marginRight: 120 }}
        >
          <Link to="/advent" className="destination" title="Advent Calendar">
            💫
          </Link>
          <span className="dest-cap" style={{ marginLeft: 50 }}>
            Advent Calendar
          </span>
        </div>
        <div className="dest-cont" style={{ marginTop: 220, marginLeft: 120 }}>
          <Link to="/phonebook" className="destination" title="Phonebook">
            🪐
          </Link>
          <span className="dest-cap" style={{ marginLeft: 50 }}>
            Phonebook
          </span>
        </div>
        <div
          className="dest-cont"
          style={{ marginBottom: 80, marginRight: 270 }}
        >
          <Link to="/italy" className="destination" title="Italy Photos">
            🌌
          </Link>
          <span className="dest-cap" style={{ marginLeft: 50 }}>
            Italy Photos
          </span>
        </div>
      </div>
    </div>
  );
};

export default Galaxy;
