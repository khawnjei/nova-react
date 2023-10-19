import React from "react";
import "./checkoutcontent.css";
import {
  DateLogo,
  InfoCard,
  ProductL,
  ProductW,
  TimeLogo,
} from "../assets/import";
import CheckoutCard1 from "./CheckoutCard1";
import CheckoutCard2 from "./CheckoutCard2";
import Tip from "./Tip";
import ServiceTax from "./ServiceTax";
import ProductTax from "./ProductTax";
import RedeemPoints from "./RedeemPoints";
import { useNavigate } from "react-router-dom";

const CheckoutContent = () => {
  const serviceCard = [
    {
      id: 1,
      imageURL: InfoCard,
      text: "Waxing  |  Full Body  |  20mins",
      logoDate: DateLogo,
      dateText: "Mon, Jan, 17, 2023",
      timeLogo: TimeLogo,
      timeText: "6:30 PM",
    },
    {
      id: 2,
      imageURL: InfoCard,
      text: "Waxing  |  Legs  |  20mins",
      logoDate: DateLogo,
      dateText: "Mon, Feb, 25, 2023",
      timeLogo: TimeLogo,
      timeText: "6:30 PM",
    },
  ];
  const productCard = [
    {
      id: 1,
      imageURL: ProductL,
      title: "Product Name",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
    },
    {
      id: 2,
      imageURL: ProductW,
      title: "Product Name",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="nova__checkout">
      <h2>Checkout</h2>
      <div className="service-main">
        <div className="service-cards">
          <h4>Service Information</h4>
          {serviceCard.map((item) => (
            <CheckoutCard1 item={item} key={item.id} />
          ))}
        </div>
        <div className="products-card">
          <h4>Product Information</h4>
          {productCard.map((item) => (
            <CheckoutCard2 item={item} key={item.id} />
          ))}
        </div>
        <div className="checkout-input">
          <div className="checkout-input-text">
            <p>Total Sub</p>
            <p>42.5%</p>
          </div>
          <h5>You can pay for one or multiple services at a time.</h5>
          <div className="checkout-divider" />
        </div>
        <div>
          <Tip />
          <ServiceTax />
          <ProductTax />
          <RedeemPoints />
        </div>
        <div className="checkout-final">
          <p>Final</p>
          <p>$28.00</p>
        </div>
        <div className="checkout-btn">
          <button onClick={() => navigate("/payment")}>Confirm & Pay</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
