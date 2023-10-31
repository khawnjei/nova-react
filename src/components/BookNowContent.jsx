import React, { useState } from "react";
import "./booknowcontent.css";
import ServiceOp from "./ServiceOp";
import MyInfo from "./MyInfo";
import StartOp from "./StartOp";
import StaffOp from "./StaffOp";
import DateOp from "./DateOp";

const BookNowContent = () => {
  const [select, setSelect] = useState({ id: 1 });

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
            onClick={() => setSelect(item)}
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
      <div className="book-main">
        {select.id === 1 ? (
          <StartOp />
        ) : select.id === 2 ? (
          <ServiceOp />
        ) : select.id === 3 ? (
          <StaffOp />
        ) : select.id === 4 ? (
          <DateOp />
        ) : (
          <MyInfo />
        )}
        <div className="next">
          <p>Next {">"}</p>
        </div>
      </div>
      <div className="book-select_res">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>
    </div>
  );
};

export default BookNowContent;
