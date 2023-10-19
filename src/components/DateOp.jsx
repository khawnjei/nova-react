import React from "react";
import "./dateop.css";
import Calendar from "../components/Calendar";

const DateOp = () => {



  return (
    <div className="nova__dateop">
      <div className="calendar-container">
        <h3>Select Date</h3>
        <div className="calendar-upper">
          <p>Select date</p>
        </div>
        <div className="calendar-main">
          <Calendar/>
        </div>
      </div>
    </div>
  );
};

export default DateOp;
