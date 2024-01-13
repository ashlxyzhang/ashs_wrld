import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import "../styling/Home.css";
const Home = () => {
    const el = useRef(null);
    const nav = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "DAPPLED SUNLIGHT",
                "SILVER WHEAT" /* Fitzgerald */,
                "BELLS CHIME",
                "ANGELS WEEP",
                "CAUGHT IN THE CURRENT",
                "PASSING TIME",
                "LOVE THE SINNER" /* Coraline */,
                "HATE THE SIN",
            ],
            typeSpeed: 35,
            fadeOut: true,
            backDelay: 1350,
            loop: true,
            showCursor: false,
        });
        return () => {
            typed.destroy();
        };
    });
    const screenClick = () => {
        setFadeOut(true);
        setTimeout(() => {
            nav("/galaxy");
        }, 500);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "bg vh-100", style: { backgroundColor: "#0A080B" } }), _jsxs("div", { className: fadeOut ? "fade-out" : "", onClick: screenClick, style: { cursor: "pointer" }, children: [_jsxs("div", { className: "bg", children: [_jsx("video", { loop: true, muted: true, autoPlay: true, children: _jsx("source", { src: "/Home/home.mp4", type: "video/mp4" }) }), _jsx("div", { className: "screen" })] }), _jsx("section", { className: "caption", children: _jsxs("div", { className: "wrapper", children: [_jsx("span", { children: "\u22C5\u02DA\u208A\u2027 \u0B68\u0B67 \u2027\u208A\u02DA \u22C5" }), _jsxs("div", { className: "center", children: [_jsx("h1", { className: "title", children: "\u0B68\u0B67 ASHS_WRLD \u0B68\u0B67" }), _jsx("h4", { ref: el, className: "title", style: { marginTop: 50 } }), _jsxs("span", { children: ["The universe created by \uD83C\uDF4E. ", _jsx("br", {}), " It can't represent 1% of her."] })] }), _jsx("span", { children: "\u22C5\u02DA\u208A\u2027 \u0B68\u0B67 \u2027\u208A\u02DA \u22C5" })] }) })] })] }));
};
export default Home;
