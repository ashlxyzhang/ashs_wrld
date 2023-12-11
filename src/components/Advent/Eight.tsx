import React, { ChangeEvent, useEffect, useState } from "react";
import "../../styling/Apple_Tree.css";

const Eight = () => {
  const [fallen, setFallen] = useState(false);
  const [eventVal, setEventVal] = useState("");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEventVal(e.target.value);
  };

  useEffect(() => {
    setFallen(eventVal === "fallen");
  }, [eventVal]);

  return (
    <>
      <div className="apple-tree d-flex flex-column justify-content-center align-items-center">
        <p>
          {
            "          # #### ####\n        ### \\/#|### |/####\n        ####\\/#/ \\||/##/_/##/_#\n    #####  \\/###|/ \\/ # ###\n     ##_\\_#\\_\\## | #/###_/_####\n  ## #### # \\ #| /  #### ##/##\n   __#_--###`  |{,###---###-~\n                 \\  }{"
          }
          <select value={eventVal} onChange={onChange}>
            <option value="red-apple">🍎</option>
            <option value="green-apple">🍏</option>
            <option value="sakura">🌸</option>
            <option value="oramge">🍊</option>
            <option value="fallen"></option>
          </select>
          {fallen
            ? "\n                    }}{\n                    }}{\n                    {{} 🍎\n         , -=-~{ .-^- _    ,   ,,\n     / '          ,      ;         '  `"
            : "\n                    }}{\n                    }}{\n                    {{}\n         , -=-~{ .-^- _    ,   ,,\n     / '          ,      ;         '  `"}
        </p>
        <br />
        <span>𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊</span>
      </div>
    </>
  );
};

export default Eight;
