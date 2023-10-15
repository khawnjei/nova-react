import React from 'react'
import "./staffop.css"
import StartOptions from './StartOptions';

const StaffOp = () => {

    const staffData = [
      {
        id: 1,
        text: "Male",
      },
      {
        id: 2,
        text: "Female",
      },
      {
        id: 3,
        text: "Any",
      },
    ];
  return (
    <div className="nova__staffop">
      <h3>Select Staff</h3>
      <div className="staffop-container">
        {staffData.map((item) => <StartOptions item={item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default StaffOp
