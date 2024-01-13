import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../../styling/Fishing.css";
const Nine = () => {
    const [clicked, setClicked] = useState(false);
    const [getObj, setGetObj] = useState(false);
    const [obj, setObj] = useState("");
    const [inv, setInv] = useState(["", "", "", "", "", "", "", "", ""]);
    const [index, setIndex] = useState(0);
    const objs = "🐡𓇼🐟💫🫧🐚🦀💌🌟🐠🐙🦑🪸⭐️🌀";
    const findObj = (objs) => {
        const len = objs.length - 2;
        const num = Math.floor((Math.random() * len) / 2) * 2;
        const obj = objs.slice(num, num + 2);
        return obj;
    };
    const moveRod = () => {
        setGetObj(false);
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
            setGetObj(true);
            setObj(findObj(objs));
        }, 2000);
    };
    const addInv = (ind) => {
        if (obj !== "" && ind < 9) {
            const updatedInv = [...inv];
            updatedInv[ind] = obj;
            setIndex(index + 1);
            setInv(updatedInv);
        }
    };
    return (_jsxs("div", { className: "d-flex justify-content-center align-items-center", style: { fontFamily: "Courier New" }, children: [_jsxs("div", { className: "fishing d-flex flex-column justify-content-center align-items-center", children: [_jsx("img", { className: clicked ? "move-rod" : "", src: "/Advent/fishing_pole.webp", alt: "fishing pole" }), _jsx("span", { className: `fished ${getObj ? "" : "d-none"}`, children: `  ${obj}` }), "   ,(   ,(   ,(   ,(   ,(   ,(   ,(   ,(\n`-'  `-'  `-'  `-'  `-'  `-'  `-'  `-'  `", _jsxs("div", { children: [_jsx("button", { onClick: moveRod, children: "Fish" }), _jsx("button", { onClick: () => addInv(index), children: "Add to Inventory" })] })] }), _jsxs("div", { className: "container text-center flex-wrap inventory", children: [_jsx("img", { src: "/Advent/layout3.png", alt: "" }), _jsx("div", { className: "row", children: _jsx("h4", { children: "Inventory" }) }), _jsx("div", { className: "row justify-content-center grid", children: inv.map((item, index) => (_jsx("div", { className: "col-3", style: {
                                display: "flex",
                                justifyContent: "center",
                                fontSize: 45,
                                alignItems: "center",
                            }, children: _jsx("span", { children: item }) }, index))) })] })] }));
};
export default Nine;
