import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "input1") {
      setInput1(value);
    } else if (name === "input2") {
      setInput2(value);
    }
  };

  function handleCalculateClick(event) {
    let operator = event.target.value;
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);

    if (operator === "+") {
      setResult(num1 + num2);
    } else if (operator === "-") {
      setResult(num1 - num2);
    } else if (operator === "/") {
      setResult(num1 / num2);
    } else {
      setResult(num1 * num2);
    }
  }

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input
        type="number"
        name="input1"
        value={input1}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="input2"
        value={input2}
        onChange={handleInputChange}
      />
      <br />
      <button value="+" onClick={handleCalculateClick}>
        Add
      </button>
      <button value="-" onClick={handleCalculateClick}>
        Subtract
      </button>
      <button value="/" onClick={handleCalculateClick}>
        Divide
      </button>
      <button value="*" onClick={handleCalculateClick}>
        Multiply
      </button>
      <br />
      <input type="number" value={result} readOnly />
    </div>
  );
}
