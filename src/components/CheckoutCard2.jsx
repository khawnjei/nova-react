import React from "react";
import "./checkoutcard2.css";

const CheckoutCard2 = ({item}) => {
  return (
    <section>
      <div className="checkoutcard2">
        <div className="prodcard-container">
          <img src={item.imageURL} alt="product" />
          <div className="product-text">
            <p>{item.title}</p>
            <p>
            {item.text}
            </p>
          </div>
        </div>
        <div className="prodcard-price">
          <input type="checkbox" />
          <label htmlFor="number">$25</label>
          <p>50%Off</p>
        </div>
      </div>
      <div className="divider-product" />
    </section>
  );
};

export default CheckoutCard2;
