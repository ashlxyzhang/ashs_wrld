import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "../../styling/Dream.css";
const Eleven = () => {
    const [index, setIndex] = useState(0);
    const [showButton, setShowButton] = useState(true);
    const imgs = ["dream.jpeg", "poppies.jpeg", "poppies2.gif", "dorothy.jpeg"];
    const texts = [
        "[ You wake up from a dream. ]",
        "[ You find yourself in a field of poppies. ]",
        "[ You start feeling a little sleepy... ]",
        "[ You settle down for a long, long nap. ]",
    ];
    const handleClick = () => {
        setIndex(index + 1);
        if (index === 2)
            setShowButton(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "bg", children: [_jsx("div", { className: "screen" }), _jsx("img", { src: `/Advent/${imgs[index]}`, alt: "dream" })] }), _jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center fade-in text", children: [_jsx("span", { children: texts[index] }), _jsx("button", { className: showButton ? "dream-button" : "d-none", onClick: handleClick, children: "Go forth" })] })] }));
};
export default Eleven;
