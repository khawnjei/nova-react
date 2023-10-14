import React, { useState } from "react";
import "./booknowcontent.css";
import StartOptions from "./StartOptions";
import ServiceOp from "./ServiceOp";
import StartOp from "./StartOp";

const BookNowContent = () => {
  const [select, setSelect] = useState({ id: 1 });

  const [currentPage, setCurrentPage] = useState(1);

  const incrementPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const decrementPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const pages = [
    <>
      <StartOp />
      <ServiceOp />
    </>,
  ];

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
        {pages[currentPage - 1]}
        {/* {pages[currentPage + 1]} */}
        <div className="next">
          <p onClick={incrementPage} disabled={currentPage === pages.length}>
            Next {">"}
          </p>
          <p onClick={decrementPage} disabled={currentPage === 1}>
            Previous{">"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookNowContent;
