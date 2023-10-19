import React from "react";
import "./paymentpop.css";
import { Reward } from "../assets/import";

const PaymentPop = ({ trigger, setTrigger }) => {
  return trigger ? (
    <>
      <div className="main-container">
        <div className="close-btn">
          <button onClick={()=> setTrigger(false)}>&times;</button>
        </div>
        <div className="paymentp">
          <img src={Reward} alt="reward" />
          <p>Congratulations</p>
          <p>You have earned</p>
          <p>5 Points</p>
          <p>Do you want to see our products?</p>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default PaymentPop;
