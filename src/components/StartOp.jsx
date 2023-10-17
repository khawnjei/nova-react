import React, { useState } from "react";
import "./startop.css";
// import StartOptions from "./StartOptions";

const StartOp = () => {
  const [select, setSelect] = useState(false);
  const inputData = [
    {
      id: 1,
      text: "Face Threading ( BROWS SERVICE IS WALK-IN FIRST COME BASES )",
    },
    {
      id: 2,
      text: "Face Wax",
    },
    {
      id: 3,
      text: "Tint",
    },
    {
      id: 4,
      text: "Waxing",
    },
    {
      id: 5,
      text: "Sugaring",
    },
    {
      id: 6,
      text: "Mens Waxing",
    },
    {
      id: 7,
      text: "Mens Sugaring",
    },
    {
      id: 8,
      text: "Facial",
    },
    {
      id: 9,
      text: "Heena Tattoos",
    },
    {
      id: 10,
      text: "VAJACIAL",
    },
  ];
  return (
    <div className="book-input">
      <h3>What is your appointment for?</h3>
      <div className="book-input_container">
        {inputData.map((item) => (
          <div
            className="start-option"
            onClick={() => setSelect(item)}
            style={{ background: item.id === select.id ? "#EE509C" : "#fff" }}
            key={item.id}
          >
            <p style={{ color: item.id === select.id ? "#fff" : "#292929" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartOp;
