import { useState, useEffect } from "react";

const Galaxy = () => {
  const [galaxyText, setGalaxyText] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    fetch("/Home/galaxy.txt")
      .then((response) => response.text())
      .then((text) => setGalaxyText(text))
      .catch((error) => console.error("Error fetching galaxy:", error));
  }, []);

  useEffect(() => {
    setFadeIn(true);
    return () => {
      setFadeIn(false);
    };
  });

  return (
    <div className="galaxy container d-flex align-items-center justify-content-center">
      {galaxyText}
    </div>
  );
};

export default Galaxy;
