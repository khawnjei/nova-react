import React from "react";
import "./footerg.css";
import { Logo2 } from "../assets/import";

const FooterG = () => {
  return (
    <div className="oi">
      <div className="nova__footerg">
        <div className="nova__footerg-heading">
          <img src={Logo2} alt="" />
          <h2>Body that shines so bright! So Bright!!</h2>
          <p>
            We wish the whole lot of different experience with NOVA threading &
            Waxing.
          </p>
        </div>
        <div className="nova__footerg-links">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Services</p>
          <p>Specials</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="nova__footerg-social">
          <h4>Social</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
        <div className="nova__footerg-contact">
          <h4>Contacts</h4>
          <div className="emaill">
            <strong>E-mail:</strong>
            <p>hello@NOVA.com</p>
          </div>
          <div className="phone">
            <strong>Phone:</strong>
            <p>+1 (456) 123 4567</p>
          </div>
          <div className="address">
            <strong>Address:</strong>
            <p>No 25/134 Mainlande, Winstom, 14450, California, USA.</p>
          </div>
        </div>
      </div>
      <div className="nova__footerg-slider">
        <div className="line-1">
          <hr />
          <p className="line-pra">
            © 2022-2023 All rights reserved | Designed by Nova
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterG;
