import React from "react";
import "./header.css";
import { Vector } from "../assets/import";

const Header = () => {
  return (
    <>
      <header className="nova__header">
        <div className="nova__header-container">
          <div className="nova__header-heading">
            <h1>
              Be Bold! Be <span>Beautiful!</span>
            </h1>
            <p>
              We aim to bring the best out of you - your bold and beautiful
              self. Trust us once and it will be for all. Nothing matters to us
              more when it comes to your care. With us, you will be sexier and
              ever confident like never before! We can't wait to see you!
            </p>
            <h3>The Nova Difference</h3>
          </div>
          <div className="nova__header-difference_container">
            <div className="nova__header-difference_percentage">
              <h5>99%</h5>
              <p>Overall Satisfaction</p>
            </div>
            <div className="nova__header-difference_percentage">
              <h5>99%</h5>
              <p>Quality</p>
            </div>
            <div className="nova__header-difference_percentage">
              <h5>99%</h5>
              <p>Enviornment</p>
            </div>
            <div className="nova__header-difference_percentage">
              <h5>95%</h5>
              <p>Repeat Coustomers</p>
            </div>
          </div>
        </div>
        <div className="nova__header-image"><img src={Vector} alt="a woman" /></div>
      </header>
    </>
  );
};

export default Header;
