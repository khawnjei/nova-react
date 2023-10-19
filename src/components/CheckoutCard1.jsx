import React from "react";
import "./checkoutcard1.css";

const CheckoutCard1 = ({ item }) => {
  return (
    <section>
      <div className="service-card_container">
        <div className="service-card">
          <img src={item.imageURL} alt="waxing" />
          <div className="text-container">
            <div className="service-text">
              <p>{item.text}</p>
            </div>
            <div className="date-container">
              <div className="checkout-date">
                <img src={item.logoDate} alt="date" />
                <p>{item.dateText}</p>
              </div>
              <div className="checkout-timing">
                <img src={item.timeLogo} alt="clock" />
                <p>{item.timeText}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="checkbox-price">
          <input type="checkbox" />
          <label htmlFor="number">$25</label>
          <p>50%Off</p>
        </div>
      </div>
      <div className="divider" />
    </section>
  );
};

export default CheckoutCard1;
