import React, { useState } from "react";
import "./App.css";

const Colors = ["pink", "green", "blue", "white", "black"];

export default function App() {
  const [currentBcColor, setBcColor] = useState(Colors[0]);
  const [currentNumber, setNumber] = useState(0);

  const changeOnClick = (color) => () => {
    setBcColor(color); // setBcColor changes the background color by updating the currentBcColor state variable
    BCcounter();
  };

  //   Keeps track of the number of times the background color has been changed
  function BCcounter() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <div className="App" style={{ backgroundColor: currentBcColor }}>
      {Colors.map((color) => (
        <button type="button" key={color} onClick={changeOnClick(color)}>
          {color}
        </button>
      ))}

      <p>{currentNumber}</p>
    </div>
  );
}
