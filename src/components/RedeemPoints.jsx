import React from 'react'
import "./redeempoints.css"

const RedeemPoints = () => {
  return (
    <section>
      <div className="redeem-points">
        <h4>Redeem Points</h4>
        <div className="points-check">
          <input type="checkbox" />
          <p>$13.5</p>
        </div>
      </div>
      <div className="redeem-divider" />
    </section>
  );
}

export default RedeemPoints
