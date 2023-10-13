import React from "react";
import "./reviews.css";
import { Dots, Reviews1, Reviews2 } from "../assets/import";

const Reviews = () => {
  return (
    <section>
      <div className="nova__reviews">
        <div className="nova__reviews-content">
          <h1>Reviews</h1>
          <div className="nova__reviews-image">
            <img src={Reviews1} alt="map" />
          </div>
          <div className="nova__reviews-review">
            <h1>Reviews</h1>
          </div>
          <div className="nova__reviews-review_container">
            <div className="nova__reviews-review_image">
              <img src={Reviews2} alt="review" />
            </div>
            <div className="nova__reviews-review_text">
              <p>
                Nova is a new beauty salon in town with excellent quality of
                services. I have one of my best <span>Read more</span>
              </p>
              <div className="nova__reviews-review_name">
                <p>
                  Sarah Smith <span> ( Sugaring )</span>
                </p>
              </div>
            </div>

            <div className="nova__reviews-review_image">
              <img src={Reviews2} alt="review" />
            </div>
            <div className="nova__reviews-review_text">
              <p>
                I went to Nova for facials and tinting. It was a very smooth
                experience. The beautician was Read more <span>Read more</span>
              </p>
              <div className="nova__reviews-review_name">
                <p>
                  Naomi Turner <span> ( Facials )</span>
                </p>
              </div>
            </div>

            <div className="nova__reviews-review_image">
              <img src={Reviews2} alt="review" />
            </div>
            <div className="nova__reviews-review_text">
              <p>
                I was looking for a beauty salon for men's waxing and found this
                place. I did upper body waxing Read more <span>Read more</span>
              </p>
              <div className="nova__reviews-review_name">
                <p>
                  James Vegas <span> ( Waxing )</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Dots} alt="dots" />
      </div>
    </section>
  );
};

export default Reviews;
