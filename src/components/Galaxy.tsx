import { useState, useEffect } from "react";

const Galaxy = () => {
  const [galaxyText, setGalaxyText] = useState("");

  useEffect(() => {
    fetch("/Home/galaxy.txt")
      .then((response) => response.text())
      .then((text) => setGalaxyText(text))
      .catch((error) => console.error("Error fetching galaxy:", error));
  }, []);

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: 4 }}
    >
      {galaxyText}
    </div>
  );
};

export default Galaxy;
