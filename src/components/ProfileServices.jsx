import React, { useState } from "react";
import "./profileservices.css";
import ProfileCard from "./ProfileCard";
import { DateP } from "../assets/import";
import UpcomingServices from "../components/UpcomingServices";

const ProfileServices = () => {
  const [select, setSelect] = useState({ id: 1 });
  const profileNavigation = [
    {
      id: 1,
      text: "Past Services",
    },
    {
      id: 2,
      text: "Cancelled Services",
    },
    {
      id: 3,
      text: "Upcoming Services",
    },
  ];
  const cardData = [
    {
      id: 1,
      heading: "Waxing",
      price: "$150",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageURL: DateP,
      imageText: "25 Feb 2023",
    },
    {
      id: 2,
      heading: "Waxing",
      price: "$150",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageURL: DateP,
      imageText: "25 Feb 2023",
    },
    {
      id: 3,
      heading: "Waxing",
      price: "$150",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageURL: DateP,
      imageText: "25 Feb 2023",
    },
    {
      id: 4,
      heading: "Waxing",
      price: "$150",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageURL: DateP,
      imageText: "25 Feb 2023",
    },
  ];
  return (
    <div className="profile-services">
      <div className="navigation-container">
        {profileNavigation.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelect(item)}
            className="services-navigation"
          >
            <h4
              style={{ color: item.id === select.id ? "#EE509C" : "#292929" }}
            >
              {item.text}
            </h4>
            <div
              style={{
                background: item.id === select.id ? "#EE509C" : "transparent",
              }}
              className="naigation-slider"
            />
          </div>
        ))}
      </div>
      <div className="services-card_container">
        {select.id === 1 ? (
          cardData.map((item) => <ProfileCard item={item} key={item.id} />)
        ) : select.id === 2 ? (
          cardData.map((item) => <ProfileCard item={item} key={item.id} />)
        ) : 
          <UpcomingServices />
        }
      </div>
      <div className="profile-services_btn">
        <button>Load more</button>
      </div>
    </div>
  );
};

export default ProfileServices;
