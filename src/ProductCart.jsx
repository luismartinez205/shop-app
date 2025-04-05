// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null;
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;

  