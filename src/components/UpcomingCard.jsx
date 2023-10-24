import React from 'react'
import "./upcomingcard.css"

const UpcomingCard = ({item}) => {
  return (
    <>
      <div className="service-card_container">
        <div className="service-card">
          <img src={item.image} alt="waxing" />
          <div className="text-container">
            <div className="service-text">
              <p>{item.heading}</p>
            </div>
            <div className="date-container">
              <div className="checkout-date">
                <img src={item.dateLogo} alt="date" />
                <p>{item.dateText}</p>
              </div>
              <div className="checkout-timing">
                <img src={item.timeLogo} alt="clock" />
                <p>{item.timeText}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="checkbox-up_btn">
          <div className="checkbox-up">
            <img src={item.btnImage} alt="" />
            <h6>{item.btnText}</h6>
          </div>
          <p>{item.price}</p>
        </div>
      </div>
      <div className="divider" />
    </>
  );
}

export default UpcomingCard
