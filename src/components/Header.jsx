import React from "react";
import "./header.css";
import { Vector } from "../assets/import";

const Header = () => {
  return (
    <div className="nova__header">
      <div className="nova__header-heading">
        <h1>
          Be Bold! Be <span>Beautiful!</span>
        </h1>
        <div className="nova__header-heading_text">
          <p>
            We aim to bring the best out of you - your bold and <br /> beautiful
            self. Trust us once and it will be for all. <br /> Nothing matters
            to us more when it comes to your <br /> care. With us, you will be
            sexier and ever confident like <br />
            never before! We can't wait to see you!
          </p>
        </div>
        <div className="nova__header-difference">
          <div className="nova__header-difference-heading">
            <h3>The NOVA Difference</h3>
          </div>
          <div className="nova__header-difference-container">
            <div className="nova__header-difference_percentage">
              <h3>99%</h3>
              <p>
                Overall <br />
                Satisfaction
              </p>
            </div>
            <div className="nova__header-difference_percentage">
              <h3>99%</h3>
              <p>Quality</p>
            </div>
            <div className="nova__header-difference_percentage">
              <h3>99%</h3>
              <p>Enviornment</p>
            </div>
            <div className="nova__header-difference_percentage">
              <h3>95%</h3>
              <p>
                Repeat <br /> Coustomers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="nova__header-image">
        <img src={Vector} alt="a woman"/>
      </div>
    </div>
  );
};

export default Header;
