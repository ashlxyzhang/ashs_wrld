import React, { useEffect, useState } from "react";

interface Sticker {
  type: string;
  x: number;
  y: number;
}

const One = () => {
  const [piece, setPiece] = useState("");
  const [moving, setMoving] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [pieces, setPieces] = useState<Sticker[]>([]);

  const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setMoving(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!moving) return;

    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;

    setOffset({ x: deltaX, y: deltaY });
  };

  const mouseUp = () => {
    setMoving(false);
    setPieces((pieces) => [
      ...pieces,
      {
        type: piece,
        x: startPos.x + offset.x,
        y: startPos.y + offset.y,
      },
    ]);
  };

  useEffect(() => {
    console.log(piece);
    console.log(pieces);
  }, [piece, pieces]);

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <span>Click the strawberry or the cream to choose a piece.</span>
      <span>Click the board to place a piece.</span>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img
          id="waffle"
          src="/Advent/waffle_board.png"
          alt="waffle board"
          onMouseDown={mouseDown}
          onMouseMove={mouseMove}
          onMouseUp={mouseUp}
        />
        {pieces.map((piece, index) => (
          <img
            key={index}
            src={piece.type}
            alt="piece copy"
            style={{
              position: "fixed",
              left: `${piece.x - 50}px`,
              top: `${piece.y - 30}px`,
            }}
          />
        ))}
        <div className="d-flex flex-column" id="pieces">
          <img
            src="/Advent/strawberry.png"
            alt="strawberry"
            onClick={() => setPiece("/Advent/strawberry.png")}
          />
          <img
            src="/Advent/cream.png"
            alt="cream"
            onClick={() => setPiece("/Advent/cream.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default One;
