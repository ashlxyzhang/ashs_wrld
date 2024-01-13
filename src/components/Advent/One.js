import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../../styling/Waffle.css";
const One = () => {
    const [piece, setPiece] = useState("");
    const [moving, setMoving] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [pieces, setPieces] = useState([]);
    const mouseDown = (e) => {
        setMoving(true);
        setStartPos({ x: e.clientX, y: e.clientY });
    };
    const mouseMove = (e) => {
        if (!moving)
            return;
        const deltaX = e.clientX - startPos.x;
        const deltaY = e.clientY - startPos.y;
        setOffset({ x: deltaX, y: deltaY });
    };
    const mouseUp = () => {
        setMoving(false);
        if (piece !== "") {
            setPieces((pieces) => [
                ...pieces,
                {
                    type: piece,
                    x: startPos.x + offset.x,
                    y: startPos.y + offset.y,
                },
            ]);
        }
    };
    return (_jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [_jsx("span", { children: "Click the strawberry or the cream to choose a piece." }), _jsx("span", { children: "Click the board to place a piece." }), _jsxs("div", { className: "d-flex justify-content-center align-items-center mt-5", children: [_jsx("img", { id: "waffle", src: "/Advent/waffle_board.png", alt: "waffle board", onMouseDown: mouseDown, onMouseMove: mouseMove, onMouseUp: mouseUp }), pieces.map((piece, index) => (_jsx("img", { className: "placed", src: piece.type, alt: "piece copy", style: {
                            position: "fixed",
                            left: `${piece.x - 45}px`,
                            top: `${piece.y - 50}px`,
                        } }, index))), _jsxs("div", { className: "d-flex flex-column", id: "pieces", children: [_jsx("img", { src: "/Advent/strawberry.png", alt: "strawberry", onClick: () => setPiece("/Advent/strawberry.png") }), _jsx("img", { src: "/Advent/cream.png", alt: "cream", onClick: () => setPiece("/Advent/cream.png") })] })] })] }));
};
export default One;
