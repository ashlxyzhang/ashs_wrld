import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const Two = () => {
    useEffect(() => {
        let adam = null;
        let god = null;
        setTimeout(() => {
            adam = window.open("/Advent/adam.jpeg", "Adam", `width=337, height=307, left=200, top=${window.innerHeight - 300}`);
            god = window.open("/Advent/god.jpeg", "God", `width=566, height=366, left=${window.innerWidth - 600}, top=100`);
        }, 500);
        return () => {
            if (adam && !adam.closed)
                adam.close();
            if (god && !god.closed)
                god.close();
        };
    });
    return (_jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: ["The Creation of Adam", _jsx("br", {}), _jsx("img", { src: "/Advent/cross.gif", alt: "cross" })] }));
};
export default Two;
