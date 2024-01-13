import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../../styling/Cards.css";
const Seventeen = () => {
    const [cards, setCards] = useState([]);
    const [rotate, setRotate] = useState(false);
    const deck = [
        "I",
        "II",
        "III",
        "IIII",
        "V",
        "VI",
        "VII",
        "VIII",
        "VIIII",
        "X",
        "XI",
        "XII",
        "XIII",
        "XIIII",
        "XV",
        "XVI",
        "XVII",
        "XVIII",
        "XVIIII",
        "XX",
        "XXI",
        "fool",
    ];
    const draw = () => {
        if (cards.length < 3) {
            let current = deck[Math.floor(Math.random() * deck.length)];
            while (cards.includes(current)) {
                current = deck[Math.floor(Math.random() * deck.length)];
            }
            setCards((prev) => [...prev, current]);
        }
    };
    const clear = () => {
        setCards([]);
    };
    const shuffle = () => {
        setRotate(true);
        setTimeout(() => {
            setRotate(false);
        }, 2000);
    };
    return (_jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [_jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center m-4", children: [_jsx("span", { children: "Tarot Readings" }), _jsx("span", { children: "Tarot de Marseille" }), _jsx("span", { children: "Jean Dodal" })] }), _jsx("div", { children: cards.map((card, index) => (_jsx("img", { className: "fade-in m-2", src: `/Advent/cards/${card}.jpeg`, alt: "" }, index))) }), _jsx("img", { className: rotate ? "rotate" : "", src: "/Advent/cards/back.jpeg", alt: "card backing" }), _jsxs("div", { className: "d-flex flex-wrap m-4", children: [_jsx("button", { onClick: shuffle, className: "m-2", children: "Shuffle" }), _jsx("button", { onClick: draw, className: "m-2", children: "Draw" }), _jsx("button", { onClick: clear, className: "m-2", children: "Clear" })] })] }));
};
export default Seventeen;
