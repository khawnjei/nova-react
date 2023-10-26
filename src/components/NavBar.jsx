import React, { useState } from "react";
import { Cart, Logo, MenuBar, Svg } from "../assets/import";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
// import ProfileOp from "./ProfileOp";

const NavBar = () => {
  // const [toggle, setToggle] = useState(true);
  const optionData = [
    {
      id: 1,
      option: "Profile",
    },
    {
      id: 2,
      option: "Services",
    },
    {
      id: 3,
      option: "Rewards",
    },
    {
      id: 4,
      option: "Payment Info",
    },
    {
      id: 5,
      option: "Logout",
    },
  ];
  const [dropdown, setDropdown] = useState(false);
  // const [select, setSelect] = useState({ id: 1 });

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
          <p onClick={() => navigate("/book")} className="book">
            <a href="#booknow">Book Now</a>
          </p>
          <p onClick={() => navigate("/contact")}>
            <a href="#contact">Contact Us</a>
          </p>
        </div>
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
          <div
            className="custom-dropdwon"
            onMouseLeave={() => setDropdown(!dropdown)}
          >
            {dropdown && (
              <ul className="dropdown-options">
                {optionData.map((option) => (
                  <li
                    //  onClick={() => setSelect(option)}
                    key={option.id}
                  >
                    {option.option}
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

    
      <div className="toggle-nav">
        <img
        className="menu-bar"
          // onClick={() => setToggle(!toggle)}
          src={MenuBar}
          alt="menubar"
        />
        <img src={Logo} alt="logo" />
        <div className="cart-logo">
          <img src={Cart} alt="cart" />
        </div>
      </div>

      
    
    </nav>
  );
};

export default NavBar;
