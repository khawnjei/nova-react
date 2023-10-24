import React from "react";
import "./paymentinfocard.css";

const PaymentinfoCard = ({ item }) => {
  return (
    <>
      <div className="paymentinfo-card">
        <div className="card-text_container">
          <img src={item.image} alt="" />
          <div className="card-text">
            <h4>{item.cardInfo}</h4>
            <p>{item.cardText}</p>
          </div>
        </div>
        <div className="edit-option">
          <p>{item.edit}</p>
        </div>
      </div>
      <div className="paymentinfo-divider" />
    </>
  );
};

export default PaymentinfoCard;
