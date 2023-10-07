import React, { useState } from "react";
import "./footer.css";
import { Logo2 } from "../assets/import";

const Footer = () => {
  const [text, setText] = useState("");

  const handleTextareaChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="nova__footer">
      <div className="nova__footer-container">
        <div className="nova__footer-heading">
          <h1>Contact Us</h1>
          <div className="nova__footer-question">
            <h1>Did you got confused at anything?</h1>
            <div className="nova__footer-send">
              <p>
                Please fill the form and just click <span> "Send"</span>!
              </p>
            </div>
          </div>
          <div className="nova__footer-lower">
            <div className="nova__footer-lower_container">
              <div className="nova__footer-lower_logo">
                <img src={Logo2} alt="logo" />
                <div className="nova__footer-lower_heading">
                  <h3>Body that shines so bright! So Bright!!</h3>
                  <div className="nova__footer-lower_text">
                    <p>
                      We wish the whole lot of different experience with NOVA
                      threading & Waxing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="nova__footer-lower_links">
                <h3>Quick Links</h3>
                <div className="nova__footer-lower_links-container">
                  <p>
                    <a href="#home">Home</a>
                  </p>
                  <p>
                    <p>
                      <a href="#services">Services</a>
                    </p>
                    <p>
                      <a href="#specials">Specials</a>
                    </p>
                    <p>
                      <a href="#about">About</a>
                    </p>
                    <a href="#Contact">Contact</a>
                  </p>
                </div>
              </div>

              <div className="nova__footer-lower_links-social">
                <div className="nova__footer_links-social_heading">
                  <h3>Social</h3>
                  <div className="nova__footer-lower_links-social_container">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                  </div>
                </div>
                <div className="nova__footer-lower_contact">
                  <div className="nova__footer-lower_contact-container">
                    <h3>Contacts</h3>
                    <div className="nova__footer-lower_contact-container_div">
                      <p>E-mail: hello@NOVA.com</p>
                      <p>Phone: +1 (456) 123 4567</p>
                      <p>
                        Address: No 25/134 Mainlande, Winstom, 14450,
                        California, USA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="nova__footer-slider" /> */}

        <div className="nova__footer-input">
          <input
            className="name"
            type="text"
            placeholder="Enter your full name"
          />
          <input
            className="email"
            type="email"
            placeholder="Enter your e-mail address"
          />
          <input
            className="number"
            type="number"
            placeholder="Enter your phone number"
          />
          <textarea
            className="message"
            placeholder={text ? "" : "Enter your message"}
            name=""
            id=""
            cols="30"
            rows="10"
            value={text}
            onChange={handleTextareaChange}
          >
            /
          </textarea>
          <div className="nova__footer-input_button">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
