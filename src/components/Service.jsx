import React from "react";
import { Rectangle23, Rectangle24, Rectangle25 } from "../assets/import";
import "./service.css";

const Service = () => {
  return (
    <div className="nova__services">
      <div className="nova__services-content">
        <h3>Our Services</h3>
        <div className="nova__services-container">
          <div className="nova__services-image">
            <img src={Rectangle23} alt="a woman" />
            <div className="nova__services-image_heading">
              <h4>Waxing</h4>
              <h5>$150</h5>
            </div>
            <div className="nova__services-image_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read
                more
              </p>
            </div>
            <div className="nova__services-book">
              <p>Book now</p>
              <div className="nova__services-book_slider" />
            </div>
          </div>
          <div className="nova__services-image">
            <img src={Rectangle24} alt="a woman" />
            <div className="nova__services-image_heading">
              <h4>Threading</h4>
              <h5>$150</h5>
            </div>
            <div className="nova__services-image_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read
                more
              </p>
            </div>
            <div className="nova__services-book">
              <p>Book now</p>
              <div className="nova__services-book_slider" />
            </div>
          </div>
          <div className="nova__services-image">
            <img src={Rectangle25} alt="a woman" />
            <div className="nova__services-image_heading">
              <h4>Sugaring</h4>
              <h5>$150</h5>
            </div>
            <div className="nova__services-image_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read
                more
              </p>
            </div>
            <div className="nova__services-book">
              <p>Book now</p>
              <div className="nova__services-book_slider" />
            </div>
          </div>
          <div className="nova__services-image">
            <img src={Rectangle23} alt="a woman" />
            <div className="nova__services-image_heading">
              <h4>Facials</h4>
              <h5>$150</h5>
            </div>
            <div className="nova__services-image_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read
                more
              </p>
            </div>
            <div className="nova__services-book">
              <p>Book now</p>
              <div className="nova__services-book_slider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
