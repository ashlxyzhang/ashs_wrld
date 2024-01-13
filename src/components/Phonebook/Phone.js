import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
function Phone({ image, tracks }) {
    const [clickedDigit, setClickedDigit] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");
    const getDigits = (event) => {
        const imgEle = event.target;
        const rect = imgEle.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const digit = digitPosition(x, y);
        if (digit != -1) {
            setClickedDigit(digit);
            console.log(clickedDigit);
            setPhoneNumber(phoneNumber + digit);
        }
    };
    const digitPosition = (x, y) => {
        if (x > 247 && x < 263 && y > 106 && y < 117)
            return 1;
        if (x > 233 && x < 248 && y > 91 && y < 102)
            return 2;
        if (x > 214 && x < 229 && y > 83 && y < 95)
            return 3;
        if (x > 193 && x < 208 && y > 85 && y < 96)
            return 4;
        if (x > 174 && x < 190 && y > 94 && y < 106)
            return 5;
        if (x > 162 && x < 178 && y > 112 && y < 122)
            return 6;
        if (x > 161 && x < 178 && y > 130 && y < 142)
            return 7;
        if (x > 170 && x < 186 && y > 148 && y < 159)
            return 8;
        if (x > 187 && x < 203 && y > 159 && y < 171)
            return 9;
        if (x > 207 && x < 224 && y > 163 && y < 175)
            return 0;
        return -1;
    };
    const handleInputChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const playSong = (phone) => {
        const dial = new Audio("/Phonebook/dial.mp3");
        const song = new Audio(tracks[phone].preview_url);
        song.volume = 0.5;
        setPhoneNumber("");
        dial.onended = () => song.play();
        dial.play();
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "container d-flex justify-content-center align-items-center", style: { width: 400, marginTop: "10vh", marginBottom: 50 }, children: [_jsx("img", { id: "phone", src: image, alt: "", className: "img-fluid", onClick: getDigits }), _jsx("h3", { style: { paddingLeft: 40 }, children: "Please Dial a Number." })] }), _jsxs("div", { className: "container d-flex justify-content-center align-items-center", children: [_jsx("input", { type: "text", placeholder: "+1 (***) L\u2727VE SONG", className: "text-center", value: phoneNumber, onChange: handleInputChange }), _jsx("button", { className: "btn", style: { marginLeft: 20, backgroundColor: "#feebff", color: "grey" }, onClick: () => playSong(parseInt(phoneNumber, 10) - 1), children: "Dial" })] })] }));
}
export default Phone;
