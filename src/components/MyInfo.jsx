import React from "react";
import "./myinfo.css";

const MyInfo = () => {
  return (
    <div className="nova__myinfo">
      <h3>Enter Your Information</h3>
      <div className="input-container">
        <div className="input-name-section">
          <div className="name-input">
            <label htmlFor="name">First Name*</label>
            <input placeholder="eg: abc123" type="text" />
          </div>
          <div className="lastname-input">
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="eg: abc123" />
          </div>
        </div>
        <div className="input-email-section">
          <div className="input-name-section">
            <div className="name-input">
              <label htmlFor="">Mobile*</label>
              <input
              className="info-number"
                placeholder="+1 591269 65151"
                type="number"
              />
            </div>
            <div className="lastname-input">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="abc@xyzmail.com" />
            </div>
          </div>
        </div>
      </div>
      <div className="input-address">
        <label htmlFor="name">Address</label>
        <input placeholder="+1 591269 65151" type="text" />
      </div>
      <div className="message-input">
        <label htmlFor="text">Comments</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write Here"
        ></textarea>
        <p>
          By submitting this form, you agree to receive appointment
          notifications from NOVA threading & Waxing
        </p>
      </div>
      <div className="myinfo-button">
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default MyInfo;
