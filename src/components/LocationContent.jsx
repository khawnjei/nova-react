import React from "react";
import "./locationcontent.css";
import LocationCard from "./LocationCard";

const LocationContent = () => {
  
  const locationData = [
    {
      id: 1,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
    {
      id: 2,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
    {
      id: 3,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
    {
      id: 4,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
    {
      id: 5,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
    {
      id: 6,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
    {
      id: 7,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
    {
      id: 8,
      tittle: "Sandy Springs",
      location: "5920 Roswell Rd, Ste B116, Sandy Springs, GA 30328",
    },
  ];
  return (
    <div className="nova__location">
      <h2>We Currently Operate In</h2>
      <div className="nova__location-container">
        {locationData.map((item) => (
          <LocationCard item={item} key={item.id} />
        ))}
      </div>
      <h2>More Coming Soon!</h2>
    </div>
  );
};

export default LocationContent;
