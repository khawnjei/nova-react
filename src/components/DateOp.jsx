import React, { useState } from 'react'
import "./dateop.css"
import Calendar from 'react-calendar';


const DateOp = () => {
  const [date, setDate] = useState(new Date())
const onChange = date => {
  setDate(date);
};

  return (


    <div className="nova__dateop">
      <div className="calendar-container">
      <h3>Select Date</h3>
      <div className="calendar-upper">
        <p>Select date</p>
        <h3>Mon Jan 17</h3>
      </div>
      <div className="calendar-main">
     <Calendar onChange={onChange} value={date} />
      </div>
      </div>
      

    </div>
  );
}

export default DateOp
