import { ChangeEvent, useEffect, useState } from "react";
import "../../styling/Weather.css";

interface Cloud {
  type: string;
  x: number;
  y: number;
  opacity: number;
  color: string;
}

const Ten = () => {
  const colors = ["lightblue", "#D1DFF6", "#C2D6F6", "#92B6F0", "#8BD4F6"];
  const cloud1 = "   _  _\n  ( `   )_\n (    )    `)\n(_   (_ .  _) _)";
  const cloud2 = "     _\n    (  )\n ( `  ) . )\n(_, _(  ,_)_)";
  const cloud3 = "    _ .\n  (  _ )_\n(_  _(_ ,)";
  const clouds = [cloud1, cloud2, cloud3];
  const [all, setAll] = useState<Cloud[]>([]);

  const sun =
    "          |\n          |   .\n   `.  *  |     .'\n     `. ._|_* .'  .\n   . * .'   `.  *\n-------|     |-------\n   .  *`.___.' *  .\n      .'  |* `.  *\n    .' *  |  . `.\n        . |\n          |";

  const garden =
    "                       `::`\n                        /\n                       `    `;:`\n    _          .;:;          /\n  _(_)_        ::;       wWWWw  ,,,     _\n (_)@(_),,,  _ ';:;;'    (___) {{{}}  _(_)_\n  /(_) {{{}} >'. ||  _    ~Y~   ~Y~  (_)@(_)\n  |  {{}~Y~  `> \\||.'< (@)\\|{}} \\|/   /(_)\n(\\|/)~Y~\\|/    `>|/ <` \\Y/\\|~Y~ \\|/ (\\|/) \n \\|//\\|/\\|//    `||/`  \\|/\\|\\|/\\|//\\|//\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^";

  const [eventVal, setEventVal] = useState("sunny");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEventVal(e.target.value);
  };

  const getClouds = (num: number) => {
    setAll([]);
    for (let i = 0; i < num; i++) {
      let cloud = clouds[Math.floor(Math.random() * 3)];
      let x = Math.random() * (window.innerWidth - 150);
      let y = Math.random() * 400;
      let opacity = Math.random() * 0.2 + 0.9;
      let color = colors[Math.floor(Math.random() * 5)];
      let cloudDict = {
        type: cloud,
        x: x,
        y: y,
        opacity: opacity,
        color: color,
      };

      setAll((prev) => [...prev, cloudDict]);
    }
  };

  useEffect(() => {
    if (eventVal === "sunny") getClouds(10);
    else if (eventVal === "partly-sunny") getClouds(20);
    else if (eventVal === "cloudy") getClouds(30);
  }, [eventVal]);

  return (
    <div className="wrap">
      <select value={eventVal} onChange={handleChange} id="weather">
        <option value="sunny">☀️</option>
        <option value="partly-sunny">⛅️</option>
        <option value="cloudy">☁️</option>
      </select>
      {eventVal === "sunny" && (
        <div className="sun-container">
          <span className="dot"></span>
          <span className="ascii sun">{sun}</span>
        </div>
      )}
      {eventVal === "partly-sunny" && (
        <div className="sun-container">
          <span className="dot" style={{ backgroundColor: "#fde2a1" }}></span>
          <span className="ascii sun" style={{ color: "#EFB93A" }}>
            {sun}
          </span>
        </div>
      )}
      <div className="clouds">
        <div className="ascii">
          {all.map((item, index) => (
            <span
              className="cloud"
              key={index}
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                opacity: item.opacity,
                color: item.color,
              }}
            >
              {item.type}
            </span>
          ))}
        </div>
      </div>
      <div className="clouds2">
        <div className="ascii">
          {all.map((item, index) => (
            <span
              className="cloud"
              key={index}
              style={{
                left: item.x,
                top: item.y,
                opacity: item.opacity,
                color: item.color,
              }}
            >
              {item.type}
            </span>
          ))}
        </div>
      </div>
      <div className="gardens">
        <span className="ascii garden">{garden}</span>
        <span className="ascii garden2">{garden}</span>
        <span className="ascii garden3">{garden}</span>
      </div>
    </div>
  );
};

export default Ten;
