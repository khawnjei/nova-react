import React, { useState } from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import PaymentContent from "../components/PaymentContent";
import PaymentPop from "../components/PaymentPop";
import FooterG from "../components/FooterG";

const Payment = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div
    //  style={{width: '100%', height:'100%'}}
     >
      <PaymentPop trigger={popup} setTrigger={setPopup} />
      <TopBar />
      <NavBar />
      <PaymentContent setPopup={setPopup} />
      <FooterG />
    </div>
  );
};

export default Payment;
