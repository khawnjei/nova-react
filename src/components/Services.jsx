import React from "react";
import "./services.css";
import Service from "./Service";
import Specials from "./Specials";
// import { Rectangle24 } from "../assets/import";

const Services = () => {
  return (
    <div className="nova__services">
      <Service />
      <Specials/>
    </div>
  );
};

export default Services;
