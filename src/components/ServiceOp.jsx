import React from "react";
import "./serviceop.css"
import StartOptions from "./StartOptions";

const ServiceOp = () => {
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
        {servicesData.map((item) => <StartOptions item={item} key={item.id}/>)}
      </div>
    </div>
  );
};

export default ServiceOp;
