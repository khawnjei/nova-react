import React from "react";
import "./popup.css";
import { Popup } from "../assets/import";

const PopUp = ({ trigger, setTrigger }) => {
  return trigger ? (
      <div className="popup">
        <img src={Popup} alt="logo" />
        <h2>Want to add Products</h2>
        <div className="popup-btn">
          <h4>Proceed to Checkout</h4>
          <button onClick={() => setTrigger(false)}>Add Products</button>
        </div>
      </div>
  ) : (
    ""
  );
};

export default PopUp;
