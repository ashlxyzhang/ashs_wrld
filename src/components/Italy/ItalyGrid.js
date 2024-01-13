import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function ItalyGrid({ images, captions }) {
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "mt-3 ms-3 mb-3", children: "Italy Photos" }), _jsx("div", { className: "container", children: _jsx("div", { className: "row", children: images.map((image, index) => (_jsxs("div", { className: "col-sm-6 col-md-4 mb-3 text-center", children: [_jsx("img", { src: "/Italy/" + image, alt: "", className: "img-fluid" }), _jsx("span", { className: "small", children: captions[index] })] }, index))) }) })] }));
}
export default ItalyGrid;
