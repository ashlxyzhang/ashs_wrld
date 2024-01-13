import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Fifteen = () => {
    const [show, setShow] = useState(0);
    const fortunes = [
        "Follow your most intense obsessions mercilessly.",
        "I am a cage, in search of a bird.",
        "Anyone who keeps the ability to see beauty never grows old.",
        "A book must be the axe for the frozen sea within us.",
        "I am free and that is why I am lost.",
        "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
        "All language is but a poor translation.",
        "I have the true feeling of myself only when I am unbearably unhappy.",
        "By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired.",
    ];
    const handleClick = () => {
        setShow(show + 1);
    };
    const reset = () => {
        setShow(0);
    };
    return (_jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [_jsx("span", { className: show === 0 ? "m-4" : "d-none", children: "Click me to crack open." }), _jsx("img", { className: show === 0 ? "" : "d-none", src: "/Advent/fortune.jpeg", alt: "fortune cookie", onClick: handleClick }), _jsx("span", { className: show === 1 ? "m-4" : "d-none", children: "Click me to read your fortune." }), _jsx("img", { className: show === 1 ? "m-4" : "d-none", src: "/Advent/fortune_2.png", alt: "open fortune", onClick: handleClick }), _jsx("span", { className: show === 2 ? "m-4" : "d-none", style: { width: 400, color: "#244684", textAlign: "center" }, onClick: handleClick, children: fortunes[Math.floor(Math.random() * fortunes.length)] }), _jsx("img", { className: show === 2 ? "m-4" : "d-none", style: { width: 500, position: "fixed", zIndex: -1 }, src: "/Advent/fortune_3.png", alt: "fortune message" }), _jsxs("span", { className: show === 3 ? "m-4" : "d-none", style: { width: 400, color: "#244684", textAlign: "center" }, onClick: reset, children: ["Your lucky numbers:", " ", Math.floor(Math.random() * 100) +
                        ", " +
                        Math.floor(Math.random() * 100) +
                        ", " +
                        Math.floor(Math.random() * 100)] }), _jsx("img", { className: show === 3 ? "m-4" : "d-none", style: { width: 500, position: "fixed", zIndex: -1 }, src: "/Advent/fortune_3.png", alt: "fortune message" })] }));
};
export default Fifteen;
