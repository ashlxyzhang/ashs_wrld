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

  const colorChange = (event: any) => {
    for (let i = 0; i <= 1; i += 0.01) {
      setTimeout(() => {
        event.target.style.color = scale(i).css();
      }, i * 2000);
    }
  };

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <span>The Garden of Eden</span>
      <br />
      {garden.map((string, index) => (
        <div className="d-flex" key={index}>
          {string.split(" ").map((char, index) => (
            <span
              onMouseOver={colorChange}
              style={{ fontSize: 50, cursor: "pointer", color: "#ffdbf8" }}
              key={index}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sixteen;
