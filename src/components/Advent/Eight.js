import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "../../styling/Apple_Tree.css";
const Eight = () => {
    const [fallen, setFallen] = useState(false);
    const [eventVal, setEventVal] = useState("");
    const onChange = (e) => {
        setEventVal(e.target.value);
    };
    useEffect(() => {
        setFallen(eventVal === "fallen");
    }, [eventVal]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "apple-tree d-flex flex-column justify-content-center align-items-center", children: [_jsxs("p", { children: ["          # #### ####\n        ### \\/#|### |/####\n        ####\\/#/ \\||/##/_/##/_#\n    #####  \\/###|/ \\/ # ###\n     ##_\\_#\\_\\## | #/###_/_####\n  ## #### # \\ #| /  #### ##/##\n   __#_--###`  |{,###---###-~\n                 \\  }{", _jsxs("select", { value: eventVal, onChange: onChange, children: [_jsx("option", { value: "red-apple", children: "\uD83C\uDF4E" }), _jsx("option", { value: "green-apple", children: "\uD83C\uDF4F" }), _jsx("option", { value: "sakura", children: "\uD83C\uDF38" }), _jsx("option", { value: "oramge", children: "\uD83C\uDF4A" }), _jsx("option", { value: "fallen" })] }), fallen
                            ? "\n                    }}{\n                    }}{\n                    {{} 🍎\n         , -=-~{ .-^- _    ,   ,,\n     / '          ,      ;         '  `"
                            : "\n                    }}{\n                    }}{\n                    {{}\n         , -=-~{ .-^- _    ,   ,,\n     / '          ,      ;         '  `"] }), _jsx("br", {}), _jsx("span", { children: "\uD81A\uDC7C\uD81A\uDD23\uD81A\uDD67\uD81A\uDC7C\uD80C\uDEFC\uD81A\uDD23\uD81A\uDD67\uD80C\uDEFC\uD80C\uDF4A\uD81A\uDC7C\uD81A\uDD23\uD81A\uDD67\uD81A\uDC7C\uD80C\uDEFC\uD81A\uDD23\uD81A\uDD67\uD80C\uDEFC\uD80C\uDF4A\uD81A\uDC7C\uD81A\uDD23\uD81A\uDD67\uD81A\uDC7C\uD80C\uDEFC\uD81A\uDD23\uD81A\uDD67\uD80C\uDEFC\uD80C\uDF4A" })] }) }));
};
export default Eight;
