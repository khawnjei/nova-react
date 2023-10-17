import React from "react";
import "./contactcontent.css";

const ContactContent = () => {
  return (
    <div className="contact-section">
      <h3>Contact</h3>
      <div className="content-container">
        <div className="cotact-input">
          <form action="/submit">
            <label htmlFor="phone">Phone/Email</label>
            <input
              type="text"
              id="name"
              name="phone"
              placeholder="Your email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
        <div className="contact-btn">
            <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
