import React, { useState } from "react";
import "./profilecontent.css";
import ProfileP from "../assets/profilep.png";
import { MessageD } from "../assets/import";
import ProfileOp from "./ProfileOp";
import ProfileServices from "./ProfileServices";
import Rewards from "./Rewards";
import PaymentInfo from "./PaymentInfo";

const ProfileContent = () => {
  const [select, setSelect] = useState({ id: 1 });

  const profileOptions = [
    {
      id: 1,
      text: "My Profile",
    },
    {
      id: 2,
      text: "Services",
    },
    {
      id: 3,
      text: "Rewards",
    },
    {
      id: 4,
      text: "Payment Info",
    },
  ];
  return (
    <div className="profile">
      <div className="headerp">{/* <img src={HeaderP} alt="" /> */}</div>

      <div className="profile-picture_container">
        <div className="profile-image">
          <img src={ProfileP} alt="" />
        </div>
        <div className="profile-text_container">
          <div className="profile-text">
            <h3>Profile Name</h3>
            <p>Update our photo and personal details</p>
          </div>
          <div className="profile-message">
            <img src={MessageD} alt="" />
            <h4>Messages</h4>
          </div>
        </div>
      </div>

      <div className="profile-navigate">
        {profileOptions.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelect(item)}
            style={{
              background: item.id === select.id ? "#EE509C" : "transparent",
            }}
            className="navigate-option"
          >
            <h4 style={{ color: item.id === select.id ? "#fff" : " #292929" }}>
              {item.text}
            </h4>
          </div>
        ))}
      </div>
      <div className="main-content">
        {select.id === 1 ? (
          <ProfileOp />
        ) : select.id === 2 ? (
          <ProfileServices />
        ) : select.id === 3 ? (
          <Rewards />
        ) : (
          <PaymentInfo />
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
