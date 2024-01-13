import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import chroma from "chroma-js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../styling/Smoothie.css";
const Twelve = () => {
    const ingredients = "🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍍🫐🥝🥥🥛🥑🍨🍠";
    const colors = [
        "DC2424", // apple
        "7CBB2D", // green apple
        "E48532", // orange
        "FBD438", // lemon
        "CB2236", // cherry
        "BE4279", // grape
        "E2454A", // watermelon
        "B31D1A", // strawberry
        "F68244", // peach
        "E4E4A6", // melon
        "FCE16A", // banana
        "CBCF58", // pear
        "D28930", // pineapple
        "84BCF8", // blueberry
        "A5BD40", // kiwi
        "E4E1D5", // coconut
        "FCFBF7", // milk
        "E8E868", // avocado
        "EED4A0", // ice cream
        "EED4A0", // yam
    ];
    const ingredientArr = [...ingredients];
    const [ingredientList, setIngredientList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const handleClick = (ingredient, index) => {
        if (ingredientList.length < 3) {
            setIngredientList((prev) => [ingredient, ...prev]);
            setColorList((prev) => [...prev, colors[index]]);
        }
    };
    const getColor = () => {
        if (colorList.length > 2) {
            return chroma.average(colorList).css();
        }
    };
    const clear = () => {
        setIngredientList([]);
        setColorList([]);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "d-flex vh-100 justify-content-center align-items-center", children: [_jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [_jsx("img", { src: "/Advent/blender.jpeg", alt: "blender", style: { height: "50vh", padding: 30 } }), _jsx("div", { className: "d-flex flex-column", style: {
                                marginTop: "-150px",
                                position: "fixed",
                                fontSize: 40,
                            }, children: ingredientList.map((ingredient, index) => (_jsx("span", { children: ingredient }, index))) }), _jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [_jsx(Popup, { trigger: _jsx("button", { style: { width: 50, marginRight: 20 }, children: "Blend" }), className: "popup-content", modal: true, children: _jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [_jsx("span", { children: "Enjoy your smoothie <3" }), _jsx("div", { className: "filter d-flex justify-content-center align-items-center", style: {
                                                    backgroundColor: getColor(),
                                                } }), _jsx("img", { src: "/Advent/smoothie.png", alt: "smoothie", id: "smoothie" })] }) }), _jsx("button", { onClick: clear, children: "Clear" })] })] }), _jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [_jsx("span", { children: "Choose 3 Ingredients." }), _jsx("div", { className: "d-flex flex-wrap justify-content-center align-items-center p-3", style: { width: "35vw" }, children: ingredientArr.map((ingredient, index) => (_jsx(_Fragment, { children: _jsx("span", { onClick: () => handleClick(ingredient, index), style: { cursor: "pointer", fontSize: 50 }, children: ingredient }, index) }))) })] })] }) }));
};
export default Twelve;
