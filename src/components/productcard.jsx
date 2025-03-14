// src/components/productcard.jsx
import React from "react";
import ViewProductButton from "./button";

const ProductCard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/200"; // Placeholder image URL
  const productName = "Samsung S25 Ultra";
  const productPrice = "1,15,000 rupees";

  return (
    <div className="border shadow-lg p-4 rounded-lg max-w-xs bg-white">
      <img src={productImage} alt={productName} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">Price: {productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default ProductCard;
