import { useState } from "react";

interface Props {
  image: string;
}

function Phone({ image }: Props) {
  const [clickedDigit, setClickedDigit] = useState<number>();
  const [phoneNumber, setPhoneNumber] = useState("");

  const getDigits = (event: React.MouseEvent<HTMLImageElement>) => {
    const imgEle = event.target as HTMLImageElement;
    const rect = imgEle.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log(`Clicked: ${x}, ${y}`);

    const digit = digitPosition(x, y);
    if (digit != -1) {
      setClickedDigit(digit);
      setPhoneNumber(phoneNumber + digit);
    }
  };

  const digitPosition = (x: number, y: number) => {
    if (x > 247 && x < 263 && y > 106 && y < 117) return 1;
    if (x > 233 && x < 248 && y > 91 && y < 102) return 2;
    if (x > 214 && x < 229 && y > 83 && y < 95) return 3;
    if (x > 193 && x < 208 && y > 85 && y < 96) return 4;
    if (x > 174 && x < 190 && y > 94 && y < 106) return 5;
    if (x > 162 && x < 178 && y > 112 && y < 122) return 6;
    if (x > 161 && x < 178 && y > 130 && y < 142) return 7;
    if (x > 170 && x < 186 && y > 148 && y < 159) return 8;
    if (x > 187 && x < 203 && y > 159 && y < 171) return 9;
    if (x > 207 && x < 224 && y > 163 && y < 175) return 0;
    return -1;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ width: 400, marginTop: "30vh", marginBottom: 50 }}
      >
        <img
          id="phone"
          src={image}
          alt=""
          className="img-fluid"
          onClick={getDigits}
        />
        <h2 style={{ paddingLeft: 40, fontFamily: "Times Now" }}>
          Please Dial a Number.
        </h2>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <input
          type="text"
          placeholder="+1 (***) L✧VE SONG"
          className="text-center"
          value={phoneNumber}
          onChange={handleInputChange}
        />
        <button
          className="btn"
          style={{ marginLeft: 20, backgroundColor: "pink", color: "grey" }}
        >
          Dial
        </button>
      </div>
    </>
  );
}

export default Phone;
