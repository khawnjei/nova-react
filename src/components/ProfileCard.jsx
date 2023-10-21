import React from 'react'
import "./profilecard.css"
import { Rectangle23 } from '../assets/import'
import DateP from "../assets/datep.png"

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={Rectangle23} alt="waxing" />
      <div className="card-price">
        <p>Waxing</p>
        <p>$150</p>
      </div>
      <div className="card-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card-date">
        <img src={DateP} alt="date" />
        <p>25 Feb 2023</p>
      </div>
    </div>
  );
}

export default ProfileCard
