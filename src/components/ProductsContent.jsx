import React from "react";
import "./productscontent.css";
import ProductCard from "./ProductCard";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
} from "../assets/import";

const ProductsContent = () => {
  const dataProduct = [
    {
      id: 1,
      imageURL: Product1,
      title: "Product Name",
      percentage: "50%OFF",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
      previousprize: "$50%.00",
      prizenow: "$25.00",
    },
    {
      id: 2,
      imageURL: Product2,
      title: "Product Name",
      percentage: "50%OFF",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
      previousprize: "$50%.00",
      prizenow: "$25.00",
    },
    {
      id: 3,
      imageURL: Product3,
      title: "Product Name",
      percentage: "50%OFF",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
      previousprize: "$50%.00",
      prizenow: "$25.00",
    },
    {
      id: 4,
      imageURL: Product4,
      title: "Product Name",
      percentage: "50%OFF",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
      previousprize: "$50%.00",
      prizenow: "$25.00",
    },
    {
      id: 5,
      imageURL: Product5,
      title: "Product Name",
      percentage: "50%OFF",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
      previousprize: "$50%.00",
      prizenow: "$25.00",
    },
    {
      id: 6,
      imageURL: Product2,
      title: "Product Name",
      percentage: "50%OFF",
      text: "Waxing is a method of hair removal that involves applying hot Read More",
      previousprize: "$50%.00",
      prizenow: "$25.00",
    },
  ];

  return (
    <div className="nova__products">
      <h2>Products</h2>
      <div className="nova__products-container">
        {dataProduct.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContent;
