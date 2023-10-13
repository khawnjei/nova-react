import React from "react";
import "./reviewcard.css"

const ReviewCard = ({item}) => {
  return (
    <div className="review-card">
      <h3>{item.title}</h3>
      <div className="review-text">
        <p>
        {item.review}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
