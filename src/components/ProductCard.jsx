import React from "react";
import "./productcard.css";
// import { Product1 } from "../assets/import";

const ProductCard = ({item}) => {
  return (
    <div className="productCard">
      <img src={item.imageURL} alt="product" />
      <div className="product-heading">
        <h4>{item.title}</h4>
        <p>{item.percentage}</p>
      </div>
      <p>{item.text}</p>
      <div className="product-pricing">
        <h4>{item.previousprize}</h4>
        <h4>{item.prizenow}</h4>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
