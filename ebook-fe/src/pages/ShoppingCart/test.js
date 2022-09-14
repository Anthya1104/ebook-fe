import { useState } from "react";
export default function App() {
  const [bgColor, setBgColor] = useState("");
  const handleClick = (color) => {
    localStorage.setItem("color", color);
    setBgColor(color);
  };
  return (
    <div
      style={{ backgroundColor: localStorage.getItem("color"), height: 500 }}
    >
      <button onClick={() => handleClick("pink")}>Pink</button>
      <button onClick={() => handleClick("blue")}>Blue</button>
      <button onClick={() => handleClick("purple")}>Purple</button>
    </div>
  );
}