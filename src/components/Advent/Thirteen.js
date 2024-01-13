import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../../styling/Quilt.css";
const Thirteen = () => {
    const [patches, setPatches] = useState([]);
    const handleClick = (patch) => {
        setPatches((prev) => [...prev, patch]);
    };
    return (_jsxs("div", { className: "d-flex vh-100 justify-content-center align-items-center", children: [_jsxs("div", { className: "quilt d-flex flex-wrap justify-content-start align-items-center", children: [_jsx("div", { className: "quilt-border quilt" }), patches.map((patch, index) => (_jsx("div", { children: _jsx("img", { className: "patch", src: `/Advent/quilt/patch${patch}.png` }) }, index)))] }), _jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [_jsx("span", { className: "mb-4", style: { fontSize: 20 }, children: "Make a quilt!" }), _jsx("span", { children: "Patches" }), _jsx("div", { className: "d-flex flex-wrap patch-container justify-content-center align-items-center", children: Array.from({ length: 11 }, (_, index) => 1 + index).map((patch, index) => (_jsx("img", { className: "patch m-2 p-2", src: `/Advent/quilt/patch${patch}.png`, onClick: () => handleClick(patch) }, index))) })] })] }));
};
export default Thirteen;
