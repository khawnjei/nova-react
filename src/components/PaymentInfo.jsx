import React from "react";
import "./paymentinfo.css";
import { MasterCard, Paypal, Visa } from "../assets/import";
import PaymentinfoCard from "./PaymentinfoCard";

const PaymentInfo = () => {
  const paymentinfoData = [
    {
      id: 1,
      image: Visa,
      cardInfo: "Visa",
      cardText: "**** 4089",
      edit: "Edit",
    },
    {
      id: 2,
      image: MasterCard,
      cardInfo: "Master Card",
      cardText: "**** 4089",
      edit: "Edit",
    },
    {
      id: 3,
      image: Paypal,
      cardInfo: "Paypal",
      cardText: "**** 4089",
      edit: "Edit",
    },
  ];
  return (
    <div className="paymentinfo">
      <h3>Payment Info:</h3>
      <div className="card-container">
        {paymentinfoData.map((item) => (
          <PaymentinfoCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
