import React from "react";
import "./topbar.css";
import { Logo } from "../assets/import";

const TopBar = () => {
  return (
    <>
      <div className="nova__topbar">
        <div className="nova__topbar-container">
          <div className="nova__topbar-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="nova__topbar-scheduale">
            <p>Mon - Sat 10 Am to 8 Pm</p>
            <div className="divider" />
            <p>Sun 11 Am to 6 Pm</p>
            <div className="divider" />
            <p>+1 5654 4658 23</p>
          </div>
        </div>
        <div className="nova__topbar-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
      {/* <div className="bottom-slider" /> */}
    </>
  );
};

export default TopBar;
