import React from 'react'
import "./startoptions.css"

const StartOptions = ({item}) => {
  return (
    <div className="start-option">
      <p>{item.text}</p>
    </div>
  );
}

export default StartOptions
