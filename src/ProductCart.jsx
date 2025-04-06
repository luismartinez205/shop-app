// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null;
  return (
    <>
     
      <div className="card m-2" style={{ width: '18rem' }} >
        <img src={product.image} className="card-img-top img-consistente" alt={product.name} width="300" />
        <div className="card-body d-flex flex-column align-items-stretch justify-content-end">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-secondary">{product.description}</p>
          <p className="card-text"><strong>Precio:</strong> ${product.price}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">
            Agregar al carrito
          </button>         
        </div>
      </div>
    </>
  );
};

export default ProductCard;

