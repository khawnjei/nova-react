import React, { useState } from "react";
import { Cart, Svg } from "../assets/import";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const [option, setOption] = useState("");
  const optionData = [
    "Profile",
    "Services",
    "Rewards",
    "Payment Info",
    "Logout",
  ];
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="nova__navbar">
      <div className="nova__navbar-container">
        <div className="nova__navbar-links">
          <p onClick={() => navigate("/")}>
            <a href="#home">Home</a>
          </p>
          <p onClick={() => navigate("/about")}>
            <a href="#about">About Us</a>
          </p>
          <p onClick={() => navigate("/locations")}>
            <a href="#locations">Locations</a>
          </p>
          <p onClick={() => navigate("/services")}>
            <a href="#services">Services</a>
          </p>
          <p onClick={() => navigate("/specials")}>
            <a href="#specials">Specials</a>
          </p>
          <p onClick={() => navigate("/products")}>
            <a href="#products">Products</a>
          </p>
          <p onClick={() => navigate("/reviews")}>
            <a href="#reviews">Reviews</a>
          </p>
          <button onClick={() => navigate("/book")} className="book">
            Book Now
          </button>
          <p onClick={() => navigate("/contact")}>
            <a href="#contact">Contact Us</a>
          </p>
        </div>
        <div className="nova__navbar-svgs">
          <div className="username-dropdown">
            <img
              className="svg"
              onClick={() => navigate("/profile")}
              src={Svg}
              alt="svg"
              onMouseEnter={() => setDropdown(!dropdown)}
            />
            <div className="custom-dropdwon">
              <div className="dropdown-control"></div>
              {dropdown && (
                <ul className="dropdown-options">
                  {optionData.map((option) => (
                    <li key={option}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="img-cart">
            <img className="cart" src={Cart} alt="cart" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
