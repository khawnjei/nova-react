import React from "react";
// import { useState } from "react";
import "./startop.css";
import StartOptions from "./StartOptions";
// import ServiceOp from "./ServiceOp";

const StartOp = () => {
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
          <StartOptions item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default StartOp;
