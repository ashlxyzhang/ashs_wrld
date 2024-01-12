import { Link } from "react-router-dom";
import "../styling/Galaxy.css";

const Galaxy = () => {
  return (
    <div className="galaxy">
      <img className="fade-in gal-img" src="/Home/galaxy2.jpeg" />
      <div className="d-flex fade-in vh-100 align-items-center justify-content-center">
        <div className="d-flex space-text flex-column title-cont">
          <h1 className="space-title">
            Hi! ⭐️ I'm Ashley, it's nice to meet you!
          </h1>
          <h3 className="space-mid">
            I am currently a freshman in the Texas A&M Engineering Honors
            program pursuing a B.S. in Computer Science. My passions include
            software engineering, data analytics, and surprisingly fashion 👠. I
            have experience in full-stack web development, machine learning,
            databases, scripting, and data visualization. Right now, I'm on the
            lookout for a 2024 summer SWE / data analytics internship so... feel
            free to message me or email me at ashlxyzhang@tamu.edu! 😊
          </h3>
          <h5 className="space-subtitle">
            This website is an extension of my mind as a galaxy.
            <br />
            Feel free to explore it & enjoy!
          </h5>
        </div>
        <span
          className="space-text"
          style={{
            fontSize: 10,
            textAlign: "center",
            alignSelf: "end",
            zIndex: 1,
          }}
        >
          Made with 💛 by 🍎 <br />© 2024. All rights reserved.
        </span>
        <div className="d-flex vh-100 align-items-center justify-content-center">
          <div
            className="dest-cont"
            style={{ marginBottom: "2%", marginRight: "7%" }}
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
            style={{ marginBottom: "11%", marginRight: "15%" }}
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
