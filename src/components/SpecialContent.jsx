import React from "react";
import "./specialcontent.css";
import { Rectangle25, Rectangle26, Rectangle27, } from "../assets/import";
import ServicesCard from "./ServicesCard";

const SpecialContent = () => {
  
  const specialData = [
    {
      id: 1,
      imageURL: Rectangle27,
      title: "Waxing Combo",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
    },
    {
      id: 2,
      imageURL: Rectangle26,
      title: "Threading",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
    },
    {
      id: 3,
      imageURL: Rectangle25,
      title: "Sugaring",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
    },
  ];

  return (
    <div className="nova-special">
      <h2>Specials</h2>
      <div className="nova-special_container">
        {specialData.map((item) => <ServicesCard item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default SpecialContent;
