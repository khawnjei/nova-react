import React, { useState } from "react";
import "./serviceop.css"
// import StartOptions from "./StartOptions";

const ServiceOp = () => {
  const [select, setSelect] =useState(false)
  const servicesData = [
    {
      id: 1,
      text: "Eyebrow + Tint ",
    },
    {
      id: 2,
      text: "Tint only",
    },
    {
      id: 3,
      text: "Lash Tint",
    },
  ];
  return (
    <div className="nova__servicesop">
      <h3>Select Service</h3>
      <div className="serviceop-container">
        {servicesData.map((item) => (
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

export default ServiceOp;
