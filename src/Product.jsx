import React from "react";

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full max-w-xs">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-2" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-lg font-semibold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
