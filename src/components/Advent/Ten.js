import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "../../styling/Weather.css";
const Ten = () => {
    const colors = ["lightblue", "#D1DFF6", "#C2D6F6", "#92B6F0", "#8BD4F6"];
    const cloud1 = "   _  _\n  ( `   )_\n (    )    `)\n(_   (_ .  _) _)";
    const cloud2 = "     _\n    (  )\n ( `  ) . )\n(_, _(  ,_)_)";
    const cloud3 = "    _ .\n  (  _ )_\n(_  _(_ ,)";
    const clouds = [cloud1, cloud2, cloud3];
    const [all, setAll] = useState([]);
    const sun = "          |\n          |   .\n   `.  *  |     .'\n     `. ._|_* .'  .\n   . * .'   `.  *\n-------|     |-------\n   .  *`.___.' *  .\n      .'  |* `.  *\n    .' *  |  . `.\n        . |\n          |";
    const garden = "                       `::`\n                        /\n                       `    `;:`\n    _          .;:;          /\n  _(_)_        ::;       wWWWw  ,,,     _\n (_)@(_),,,  _ ';:;;'    (___) {{{}}  _(_)_\n  /(_) {{{}} >'. ||  _    ~Y~   ~Y~  (_)@(_)\n  |  {{}~Y~  `> \\||.'< (@)\\|{}} \\|/   /(_)\n(\\|/)~Y~\\|/    `>|/ <` \\Y/\\|~Y~ \\|/ (\\|/) \n \\|//\\|/\\|//    `||/`  \\|/\\|\\|/\\|//\\|//\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^";
    const [eventVal, setEventVal] = useState("sunny");
    const handleChange = (e) => {
        setEventVal(e.target.value);
    };
    const getClouds = (num) => {
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
        if (eventVal === "sunny")
            getClouds(10);
        else if (eventVal === "partly-sunny")
            getClouds(20);
        else if (eventVal === "cloudy")
            getClouds(30);
    }, [eventVal]);
    return (_jsxs("div", { className: "wrap", children: [_jsxs("select", { value: eventVal, onChange: handleChange, id: "weather", children: [_jsx("option", { value: "sunny", children: "\u2600\uFE0F" }), _jsx("option", { value: "partly-sunny", children: "\u26C5\uFE0F" }), _jsx("option", { value: "cloudy", children: "\u2601\uFE0F" })] }), eventVal === "sunny" && (_jsxs("div", { className: "sun-container", children: [_jsx("span", { className: "dot" }), _jsx("span", { className: "ascii sun", children: sun })] })), eventVal === "partly-sunny" && (_jsxs("div", { className: "sun-container", children: [_jsx("span", { className: "dot", style: { backgroundColor: "#fde2a1" } }), _jsx("span", { className: "ascii sun", style: { color: "#EFB93A" }, children: sun })] })), _jsx("div", { className: "clouds", children: _jsx("div", { className: "ascii", children: all.map((item, index) => (_jsx("span", { className: "cloud", style: {
                            left: `${item.x}px`,
                            top: `${item.y}px`,
                            opacity: item.opacity,
                            color: item.color,
                        }, children: item.type }, index))) }) }), _jsx("div", { className: "clouds2", children: _jsx("div", { className: "ascii", children: all.map((item, index) => (_jsx("span", { className: "cloud", style: {
                            left: item.x,
                            top: item.y,
                            opacity: item.opacity,
                            color: item.color,
                        }, children: item.type }, index))) }) }), _jsxs("div", { className: "gardens", children: [_jsx("span", { className: "ascii garden", children: garden }), _jsx("span", { className: "ascii garden2", children: garden }), _jsx("span", { className: "ascii garden3", children: garden }), _jsx("span", { className: "ascii garden4", children: garden })] })] }));
};
export default Ten;
