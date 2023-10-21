import React, { useState } from "react";
import "./paymentcontent.css";
import { PaymentC } from "../assets/import";

const PaymentContent = ({ setPopup }) => {
  const [select, setSelect] = useState({ id: 1 });
  const optionData = [
    {
      id: 1,
      imageURL: PaymentC,
      text: "Pypal",
    },
    {
      id: 2,
      imageURL: PaymentC,
      text: "Venmo",
    },
    {
      id: 3,
      imageURL: PaymentC,
      text: "CashApp",
    },
    {
      id: 4,
      imageURL: PaymentC,
      text: "Debit Card",
    },
    {
      id: 5,
      imageURL: PaymentC,
      text: "Credit Card",
    },
    {
      id: 6,
      imageURL: PaymentC,
      text: "Zelle",
    },
    {
      id: 7,
      imageURL: PaymentC,
      text: "Pay at Store",
    },
  ];
  return (
    <div className="payment">
      <h2>Choose Payment Method</h2>
      <div className="payment-main">
        <div className="payment-option">
          <h4>Select Payment Method</h4>
          <div className="option-container">
            {optionData.map((item) => (
              <div key={item.id} className="payment-card">
                <img
                  onClick={() => setSelect(item)}
                  src={item.imageURL}
                  alt="logo"
                  style={{
                    filter:
                      item.id === select.id
                        ? "invert(59%) sepia(79%) saturate(4436%) hue-rotate(303deg) brightness(97%) contrast(92%)"
                        : "",
                  }}
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="option-divider" />
        <div className="payment-input">
          <form action="/submit">
            <label htmlFor="name">First Name</label>
            <input type="text" placeholder="First Name" />
            <label htmlFor="name">Last Name</label>
            <input type="text" placeholder="Last Name" />
            <label htmlFor="name">Card Number</label>
            <input type="number" placeholder="----- ---- ---- ----" />
          </form>
          <div className="date-container">
            <div className="date">
              <form action="submit">
                <label htmlFor="">Exp. Date</label>
                <input type="number" placeholder="mm/yy" />
              </form>
            </div>
            <div className="CVV">
              <form action="submit">
                <label htmlFor="">CVV</label>
                <input type="text" placeholder="xyz" />
              </form>
            </div>
          </div>
          <div className="payment-btn">
            <button onClick={() => setPopup(true)}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentContent;
