import React from "react";
import "./locationcard.css";
import { Location1 } from "../assets/import";

const LocationCard = ({ item }) => {
  return (
    <div className="nova__location-content">
      <img src={Location1} alt="map" />
      <h4>{item.tittle}</h4>
      <p>{item.location}</p>
      <button>Book now</button>
    </div>
  );
};

export default LocationCard;
