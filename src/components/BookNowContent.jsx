import React, { useState } from "react";
import "./booknowcontent.css";
import StartOptions from "./StartOptions";
// import { BookBack } from '../assets/import';

const BookNowContent = () => {
  const [select, setSelect] = useState({ id: 1 });
  const [next, setNext] = useState(1);

  const increament = () => {};

  const optionsArr = [
    {
      id: 1,
      option: "Start",
    },
    {
      id: 2,
      option: "Service",
    },
    {
      id: 3,
      option: "Staff",
    },
    {
      id: 4,
      option: "Date",
    },
    {
      id: 5,
      option: "My Info",
    },
    {
      id: 6,
      option: "Confirm",
    },
  ];

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
    <div className="book-container">
      <div className="image-text">
        <h1>Booking</h1>
        <p>📍 Washington DC</p>
      </div>
      <div className="book-select">
        {optionsArr.map((item) => (
          <div
            className="navigate-container"
            onClick={()=> setSelect(item)}
            style={{ background: item.id <= select.id ? "#EE509C" : "#FFC9E3" }}
            key={item.id}
          >
            <h4
              style={{
                color: item.id <= select.id ? "#fff" : "#292929",
              }}
            >
              {item.option}
            </h4>
          </div>
        ))}
      </div>
      <div className="book-input">
        <h3>What is your appointment for?</h3>
        <div className="book-input_container">
          {inputData.map((item) => (
            <StartOptions item={item} key={item.id} />
          ))}
        </div>
        <div className="next" onClick={() => setSelect()}>
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default BookNowContent;
