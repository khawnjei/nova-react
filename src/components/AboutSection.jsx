import React from "react";
import "./aboutsection.css";
import { Aboutgp, Background, Mission, Values } from "../assets/import";

const AboutSection = () => {
  return (
    <section>
      <div className="nova__about">
        <div className="nova__about-container">
          <div className="nova__about-heading">
            <h1>Beauty is in the hands of Nova beauticians!</h1>
            <h2>The NOVA Difference</h2>
          </div>
          <div className="nova__about-difference_container">
            <div className="nova__about-difference_percentage">
              <h5>99%</h5>
              <p>Overall Satisfaction</p>
            </div>
            <div className="nova__about-difference_percentage">
              <h5>99%</h5>
              <p>Quality</p>
            </div>
            <div className="nova__about-difference_percentage">
              <h5>99%</h5>
              <p>Environment</p>
            </div>
            <div className="nova__about-difference_percentage">
              <h5>95%</h5>
              <p>Repeat Customers</p>
            </div>
          </div>
          <div className="nova__about-content">
            <div className="nova__about-content_container">
              <img src={Mission} alt="a woman" />
              <div className="nova__about-content_text">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to bring your best self to the world. Let the
                  world see your bold and beautiful self. We aim to make your
                  day the best day ever it can be.
                </p>
              </div>
            </div>
            <div className="nova__about-content_container">
              <div className="nova__about-content_text">
                <h3>Background</h3>
                <p className="para-4">
                  Quality doesn't have to be always expensive. Nova was launched
                  to deliver top quality services at competitive prices to
                  everyone. In today's fast changing world, there are thousands
                  of beauty salons with wide range of services with differing
                  quality standards and prices. <span> Read more </span>
                </p>
              </div>
              <img src={Background} alt="a woman" />
            </div>
            <div className="nova__about-content_container">
              <img src={Values} alt="a woman" />
              <div className="nova__about-content_text">
                <h3>Our Values</h3>
                <p>
                  At Nova, customer is the queen. And, we really mean it. We
                  strive for excellence and nothing less.
                </p>
              </div>
            </div>
            <div className="nova__about-content_container">
              <div className="nova__about-content_text">
                <h3>Our Team</h3>
                <p className="para-4">
                  At Nova, we have a great team of experienced beauticians who
                  are not only deliver excellent quality of services but also
                  excellent customer care. Our beauticians are passionate about
                  and love what they do. <span>Read more</span>
                </p>
              </div>
              <img src={Aboutgp} alt="a woman" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
