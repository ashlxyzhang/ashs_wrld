import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import chroma from "chroma-js";
const Sixteen = () => {
    const scale = chroma.scale(["#3b8dcc", "#ffdbf8"]).mode("lab");
    const garden = [
        "𖡼 . 𖤣 𓇗 𖡼 . 𖤣 𓇗 𖥧 𖡼 . 𓇗 𖤣 𖥧 𖡼 . 𖤣 𓇗 𖡼 . 𖤣 𓇗 𖥧 𖡼 . 𓇗 𖤣 𖥧",
        "𖤣 . 𖡼 𖥧 𓇢 𓆸 𖡼 . 𖤣 𖥧 𓆸 𖡼 . 𖤣 . 𖡼 𖥧 𓇢 𓆸 𖡼 . 𖤣 𖥧 𓆸 𖡼 .",
        "𖡼 . 𖤣 𑁍 . 𖤣 ❦ 𖥧 𖡼 🍎 𓇗 𖤣 𖥧 ❦ 𖡼 🐍 𖤣 𑁍 . 𖤣 ❦ 𖥧 𖡼 . 𓇗 𖤣",
        "❀ 𖤣 𖥧 𖡼 ⊱ ✿ ⊰ 𖡼 𖥧 𖤣 𖥧 𖡼 ⊱ ❀ 𖤣 𖥧 𖡼 ⊱ ✿ ⊰ 𖡼 𖥧 𖤣 𖥧 𖡼 ⊱",
        "₊ 𖤣 𖥧 𖡼 ˚ ✧ 𑁍 .ೃ ࿔ * : 𖤣 𖥧 𖡼 ₊ 𖤣 𖥧 𖡼 ˚ ✧ 𑁍 .ೃ ࿔ * : 𖤣 𖥧 𖡼",
    ];
    const colorChange = (event) => {
        if (event.target.style.color === "rgb(255, 219, 248)" ||
            event.target.style.color === "rgb(253, 218, 248)") {
            for (let i = 0; i <= 1; i += 0.01) {
                setTimeout(() => {
                    event.target.style.color = scale(i).css();
                }, i * 2000);
            }
        }
    };
    return (_jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [_jsx("span", { children: "The Garden of Eden" }), _jsx("br", {}), garden.map((string, index) => (_jsx("div", { className: "d-flex", children: string.split(" ").map((char, index) => (_jsx("span", { onMouseOver: colorChange, style: { fontSize: 50, cursor: "pointer", color: "#ffdbf8" }, children: char }, index))) }, index)))] }));
};
export default Sixteen;
