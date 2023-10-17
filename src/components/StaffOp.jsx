import React, { useState } from 'react'
import "./staffop.css"

const StaffOp = () => {
  const [select, setSelect] = useState(false)

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
        {staffData.map((item) => (
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
}

export default StaffOp
