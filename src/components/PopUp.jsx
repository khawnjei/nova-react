import React from "react";
import "./popup.css";
import { Popup } from "../assets/import";
import { useNavigate } from "react-router-dom";

const PopUp = ({ trigger, setTrigger }) => {
  const navigate = useNavigate();
  return trigger ? (
    <div className="popup">
      <img src={Popup} alt="logo" />
      <h2>Want to add Products</h2>
      <div className="popup-btn">
        <h4 onClick={()=> navigate("/checkout")}>Proceed to Checkout</h4>
        <button onClick={() => setTrigger(false)}>Add Products</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
