import React, { useState } from "react";
import "./myinfo.css";
import PopUp from "./PopUp";

const MyInfo = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="nova__myinfo">
      <h3>Enter Your Information</h3>
      <div className="input-container">
        <div className="input-name-section">
          <div className="name-input">
            <form action="/submit">
              <label htmlFor="name">First Name*</label>
              <input
                placeholder="eg: abc123"
                type="text"
                id="firstname"
                name="firstname"
                required
              />
            </form>
          </div>
          <div className="lastname-input">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              placeholder="eg: abc123"
              id="lastname"
              name="name"
              required
            />
          </div>
        </div>
        <div className="input-email-section">
          <div className="input-name-section">
            <div className="name-input">
              <form action="/submit">
                <label htmlFor="number">Mobile*</label>
                <input
                  className="info-number"
                  placeholder="+1 591269 65151"
                  type="number"
                  id="number"
                  name="number"
                  required
                />
              </form>
            </div>
            <div className="lastname-input">
              <form action="/submit">
                <label htmlFor="email" id="email">
                  Email
                </label>
                <input type="email" placeholder="abc@xyzmail.com" id="email" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="input-address">
        <form action="/submit">
          <label htmlFor="address">Address</label>
          <input
            placeholder="+1 591269 65151"
            type="text"
            id="address"
            name="address"
            required
          />
        </form>
      </div>
      <div className="message-input">
        <form action="/submit">
          <label htmlFor="message">Comments</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Write Here"
            required
          ></textarea>
        </form>
        <p>
          By submitting this form, you agree to receive appointment
          notifications from NOVA threading & Waxing
        </p>
      </div>
      <div className="myinfo-button">
        <button type="submit" onClick={() => setPopup(true)}>
          Confirm
        </button>
      </div>
      <div className="popup-bg">
        <PopUp trigger={popup} setTrigger={setPopup} />
      </div>
    </div>
  );
};

export default MyInfo;
