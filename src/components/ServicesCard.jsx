import React from "react";
import "./servicescard.css";

const ServicesCard = ({item}) => {
  return (
    <div className="nova__serviceCard">
      <img src={item.imageURL} alt="waxing" />
      <h4>{item.title}</h4>
      <p>
        {item.text}
      </p>
    </div>
  );
};

export default ServicesCard;
