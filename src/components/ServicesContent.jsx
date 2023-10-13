import React, { useState } from "react";
import "./servicescontent.css";
import ServicesCard from "./ServicesCard";
import Rectangle23 from "../assets/Rectangle23.png";
import Rectangle24 from "../assets/Rectangle24.png";
import Rectangle25 from "../assets/Rectangle25.png";
import { Facial, Henna, Male1, Male2, Male3, Male4, Male5, Male6, Tinting, Vajacials } from "../assets/import";

const ServicesContent = () => {


  const [select , setSelect] = useState({id:1})

  const genderArr = [
    {
      id:1,
      gender: "Female"
    },
    {
      id:2,
      gender: "Male"
    },
  ]

  const serviceData = [
    {
      id: 1,
      imageURL: Rectangle23,
      title: "Waxing",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
    },
    {
      id: 2,
      imageURL: Rectangle24,
      title: "Threading",
      text: "Threading is a method of hair removal that involves using a Read More",
    },
    {
      id: 3,
      imageURL: Rectangle25,
      title: "Sugaring",
      text: "Sugaring is a method of hair removal that involves using a sticky Read More",
    },
    {
      id: 4,
      imageURL: Facial,
      title: "Facials",
      text: "Facials are a popular beauty treatment that involves cleansing Read More",
    },
    {
      id: 5,
      imageURL: Vajacials,
      title: "Vajacials",
      text: "A vajacial is a type of spa treatment that focuses on the vulva Read More",
    },
    {
      id: 6,
      imageURL: Tinting,
      title: "Tinting",
      text: "Tinting is a type of beauty treatment that involves adding color to Read More",
    },
    {
      id: 7,
      imageURL: Henna,
      title: "Henna Tattos",
      text: "Henna tattoos, also known as mehndi, are a type of temporary Read More",
    },
  ];

const maleData = [
  {
    id: 1,
    imageURL: Male1,
    title: "Waxing",
    text: "Waxing is a method of hair removal that involves applying hot Read More",
  },
  {
    id: 2,
    imageURL: Male2,
    title: "Threading",
    text: "Threading is a method of hair removal that involves using a Read More",
  },
  {
    id: 3,
    imageURL: Male3,
    title: "Sugaring",
    text: "Sugaring is a method of hair removal that involves using a sticky Read More",
  },
  {
    id: 4,
    imageURL: Male4,
    title: "Facials",
    text: "Facials are a popular beauty treatment that involves cleansing Read More",
  },
  {
    id: 5,
    imageURL: Male5,
    title: "Vajacials",
    text: "A vajacial is a type of spa treatment that focuses on the vulva Read More",
  },
  {
    id: 6,
    imageURL: Male6,
    title: "Tinting",
    text: "Tinting is a type of beauty treatment that involves adding color to Read More",
  },
];


  return (
    <div className="nova__services-section">
      <h2>Services</h2>
      <div className="nova__services-navigate">
        {genderArr.map((item) => (
          <div key={item.id} className="nova_geneder-select-container">
            <h3 onClick={() => setSelect(item)}>{item.gender}</h3>
            <div
              style={{
                background: item.id === select.id ? "#EE509C" : "transparent",
              }}
              className="nova__gender-strip"
            ></div>
          </div>
        ))}
      </div>
      <div className="nova__services-main_container">
          {  select.id ===1 ?
           serviceData.map((item) => (
          <ServicesCard item={item} key={item.id} />
        )):
           maleData.map((item) => (
          <ServicesCard item={item} key={item.id} />
        ))
        }
      </div>
    </div>
  );
};

export default ServicesContent;
