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
        <div className="d-flex flex-column title-cont">
          <h1 className="space-text space-title">
            Hello... I'm Ashley. <br />
            It's nice to finally meet you.
          </h1>
          <h5 className="space-text space-subtitle">
            This website is an extension of my mind. <br />
            Feel free to click around & enjoy.
          </h5>
          <div></div>
        </div>
        <div className="d-flex gal-cont vh-100 align-items-center justify-content-center">
          <img className="gal-img" src="/Home/galaxy2.jpeg" />
          <span className="galaxy-text" style={{ marginRight: "5%" }}>
            {galaxyText}
          </span>
          <div
            className="dest-cont"
            style={{ marginBottom: "2%", marginRight: "5%" }}
          >
            <Link to="/" className="destination">
              🌎
            </Link>
            <div className="dest-cap">
              <span>Home (Earth)</span>
            </div>
          </div>
          <div
            className="dest-cont"
            style={{ marginBottom: "11%", marginRight: "5%" }}
          >
            <Link to="/advent" className="destination">
              💫
            </Link>
            <span className="dest-cap">Advent Calendar</span>
          </div>
          <div
            className="dest-cont"
            style={{ marginTop: "15%", marginLeft: "5%" }}
          >
            <Link to="/phonebook" className="destination">
              🪐
            </Link>
            <span className="dest-cap">Phonebook</span>
          </div>
          <div
            className="dest-cont"
            style={{ marginBottom: "4%", marginRight: "20%" }}
          >
            <Link to="/italy" className="destination">
              🌌
            </Link>
            <span className="dest-cap">Italy Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galaxy;
