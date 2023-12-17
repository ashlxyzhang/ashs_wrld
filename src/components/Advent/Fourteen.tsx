import React, { useEffect, useState } from "react";
import "../../styling/Clocks.css";

const Fourteen = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDallasHour = () => {
    return now.getHours();
  };

  const getDallasMinute = () => {
    return now.getMinutes();
  };

  const getDallasSecond = () => {
    return now.getSeconds();
  };

  const hourToDeg = (hour: number, min: number) => {
    return (hour % 12) * 30 + min * 0.5;
  };

  const minToDeg = (min: number) => {
    return min * 6;
  };

  return (
    <div className="d-flex clock-container vh-100 justify-content-around align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          className="clock"
          src="/Advent/clocks/clock1.png"
          alt="first clock"
        />
        <div
          className="hour-hand"
          style={{
            transform: `rotate(${hourToDeg(
              getDallasHour() - 2,
              getDallasMinute()
            )}deg)`,
            transformOrigin: "50% 70%",
          }}
        ></div>
        <div
          className="minute-hand"
          style={{
            transform: `rotate(${minToDeg(getDallasMinute())}deg)`,
            transformOrigin: "50% 75%",
          }}
        ></div>
        <div
          className="second-hand"
          style={{
            transform: `rotate(${minToDeg(getDallasSecond())}deg)`,
            transformOrigin: "50% 75%",
          }}
        ></div>
        <div className="clock-text">
          <span>Cupertino, California</span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          className="clock"
          src="/Advent/clocks/clock2.png"
          alt="second clock"
        />
        <div
          className="hour-hand"
          style={{
            transform: `rotate(${hourToDeg(
              getDallasHour(),
              getDallasMinute()
            )}deg)`,
            transformOrigin: "50% 70%",
          }}
        ></div>
        <div
          className="minute-hand"
          style={{
            transform: `rotate(${minToDeg(getDallasMinute())}deg)`,
            transformOrigin: "50% 75%",
          }}
        ></div>
        <div
          className="second-hand"
          style={{
            transform: `rotate(${minToDeg(getDallasSecond())}deg)`,
            transformOrigin: "50% 75%",
          }}
        ></div>
        <div className="clock-text">
          <span>Dallas, Texas</span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          className="clock"
          src="/Advent/clocks/clock3.png"
          alt="third clock"
        />
        <div
          className="hour-hand"
          style={{
            transform: `rotate(${hourToDeg(
              getDallasHour() + 1,
              getDallasMinute()
            )}deg)`,
            transformOrigin: "50% 70%",
            backgroundColor: "#C31C2F",
            borderColor: "#911115",
          }}
        ></div>
        <div
          className="minute-hand"
          style={{
            transform: `rotate(${minToDeg(getDallasMinute())}deg)`,
            transformOrigin: "50% 75%",
            backgroundColor: "#C31C2F",
            borderColor: "#911115",
          }}
        ></div>
        <div
          className="second-hand"
          style={{
            transform: `rotate(${minToDeg(getDallasSecond())}deg)`,
            transformOrigin: "50% 75%",
            backgroundColor: "#C31C2F",
            borderColor: "#911115",
          }}
        ></div>
        <div className="clock-text">
          <span>New York, New York</span>
        </div>
      </div>
    </div>
  );
};

export default Fourteen;
