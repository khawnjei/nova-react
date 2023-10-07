import React from "react";
import "./specials.css";
import { Rectangle25, Rectangle26, Rectangle27 } from "../assets/import";

const Specials = () => {
  return (
    <div className="nova__specials">
      <div className="nova__services-content">
        <h3>Specials</h3>
        <div className="nova__services-container">
          <div className="nova__services-image">
            <img src={Rectangle27} alt="a woman" />
            <div className="nova__services-image_heading">
              <h4>Waxing Combo</h4>
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
            <img src={Rectangle26} alt="a woman" />
            <div className="nova__services-image_heading">
              <h4>Threading Specials</h4>
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
              <h4>Sugaring Deals</h4>
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

export default Specials;
