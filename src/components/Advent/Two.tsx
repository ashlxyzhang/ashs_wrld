import { useEffect } from "react";

const Two = () => {
  useEffect(() => {
    let adam: Window | null = null;
    let god: Window | null = null;
    setTimeout(() => {
      adam = window.open(
        "/Advent/adam.jpeg",
        "Adam",
        `width=337, height=307, left=200, top=${window.innerHeight - 300}`
      );
      god = window.open(
        "/Advent/god.jpeg",
        "God",
        `width=566, height=366, left=${window.innerWidth - 600}, top=100`
      );
    }, 500);

    return () => {
      if (adam && !adam.closed) adam.close();
      if (god && !god.closed) god.close();
    };
  });

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      The Creation of Adam
      <br />
      <img src="/Advent/cross.gif" alt="cross" />
    </div>
  );
};

export default Two;
