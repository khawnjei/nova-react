import React from "react";
import "./topbar.css";
import { Logo } from "../assets/import";

const TopBar = () => {
  return (
    <div className="nova__topbar">
      <div className="nova__topbar_content">
        <div className="nova__topbar_content-logo">
          <img src={Logo} alt="logo" />
          <div className="nova__topbar_content-text">
            <p>Mon - Sat 10 Am to 8 Pm</p>
            <div className="slider" />
            <p>Sun 11 Am to 6 Pm</p>
            <div className="slider" />
            <p>+1 5654 4658 23</p>
            <div className="nova__topbar_content-buttons">
              <button className="login">Login</button>
              <button className="signup">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sliderBottom" />
    </div>
  );
};

export default TopBar;
