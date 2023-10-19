import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import FooterG from "../components/FooterG";
import CheckoutContent from "../components/CheckoutContent";

const Checkout = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <CheckoutContent/>
      <FooterG/>
    </div>
  );
};

export default Checkout;
