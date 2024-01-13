import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
    const hourToDeg = (hour, min) => {
        return (hour % 12) * 30 + min * 0.5;
    };
    const minToDeg = (min) => {
        return min * 6;
    };
    return (_jsxs("div", { className: "d-flex clock-container vh-100 justify-content-around align-items-center", children: [_jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [_jsx("img", { className: "clock", src: "/Advent/clocks/clock1.png", alt: "first clock" }), _jsx("div", { className: "hour-hand", style: {
                            transform: `rotate(${hourToDeg(getDallasHour() - 2, getDallasMinute())}deg)`,
                            transformOrigin: "50% 70%",
                        } }), _jsx("div", { className: "minute-hand", style: {
                            transform: `rotate(${minToDeg(getDallasMinute())}deg)`,
                            transformOrigin: "50% 75%",
                        } }), _jsx("div", { className: "second-hand", style: {
                            transform: `rotate(${minToDeg(getDallasSecond())}deg)`,
                            transformOrigin: "50% 75%",
                        } }), _jsx("div", { className: "clock-text", children: _jsx("span", { children: "Cupertino, California" }) })] }), _jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [_jsx("img", { className: "clock", src: "/Advent/clocks/clock2.png", alt: "second clock" }), _jsx("div", { className: "hour-hand", style: {
                            transform: `rotate(${hourToDeg(getDallasHour(), getDallasMinute())}deg)`,
                            transformOrigin: "50% 70%",
                        } }), _jsx("div", { className: "minute-hand", style: {
                            transform: `rotate(${minToDeg(getDallasMinute())}deg)`,
                            transformOrigin: "50% 75%",
                        } }), _jsx("div", { className: "second-hand", style: {
                            transform: `rotate(${minToDeg(getDallasSecond())}deg)`,
                            transformOrigin: "50% 75%",
                        } }), _jsx("div", { className: "clock-text", children: _jsx("span", { children: "Dallas, Texas" }) })] }), _jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [_jsx("img", { className: "clock", src: "/Advent/clocks/clock3.png", alt: "third clock" }), _jsx("div", { className: "hour-hand", style: {
                            transform: `rotate(${hourToDeg(getDallasHour() + 1, getDallasMinute())}deg)`,
                            transformOrigin: "50% 70%",
                            backgroundColor: "#C31C2F",
                            borderColor: "#911115",
                        } }), _jsx("div", { className: "minute-hand", style: {
                            transform: `rotate(${minToDeg(getDallasMinute())}deg)`,
                            transformOrigin: "50% 75%",
                            backgroundColor: "#C31C2F",
                            borderColor: "#911115",
                        } }), _jsx("div", { className: "second-hand", style: {
                            transform: `rotate(${minToDeg(getDallasSecond())}deg)`,
                            transformOrigin: "50% 75%",
                            backgroundColor: "#C31C2F",
                            borderColor: "#911115",
                        } }), _jsx("div", { className: "clock-text", children: _jsx("span", { children: "New York, New York" }) })] })] }));
};
export default Fourteen;
