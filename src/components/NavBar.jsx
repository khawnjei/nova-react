import React from "react";
import { Cart, Svg } from "../assets/import";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nova__navbar">
      <div className="nova__navbar-links">
        <p>
          <a href="home">Home</a>
        </p>
        <p>
          <a href="about">About Us</a>
        </p>
        <p>
          <a href="locations">Locations</a>
        </p>
        <p>
          <a href="services">Services</a>
        </p>
        <p>
          <a href="specials">Specials</a>
        </p>
        <p>
          <a href="products">Products</a>
        </p>
        <p>
          <a href="reviews">Reviews</a>
        </p>
        <div className="nova__navbar-button">
          <button>Book Now</button>
          <p>
            <a href="contact">Contact Us</a>
          </p>
          <div className="nova__navbar-svgs">
            <img className="svg" src={Svg} alt="svg" />
            <div className="cartBack">
              <img className="cart" src={Cart} alt="cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
