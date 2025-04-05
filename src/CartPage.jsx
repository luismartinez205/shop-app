// CartPage.jsx
import React from 'react';
import { Button, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Resumen del Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                <strong>{item.name}</strong><br />
                ${item.price} x{" "}
                <InputNumber
                  min={1}
                  value={item.quantity}
                  onChange={(value) => updateQuantity(item.id, value)}
                  style={{ width: 60, margin: '0 10px' }}
                />
                = ${item.price * item.quantity}
                <Button danger type="link" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
              </li>
            ))}
          </ul>
          <p><strong>Total de productos:</strong> {totalItems}</p>
          <p><strong>Total a pagar:</strong> ${totalPrice.toFixed(2)}</p>
        </div>
      )}
      <Button type="primary" onClick={() => navigate("/")}>← Regresar a la tienda</Button>
    </div>
  );
};

export default CartPage;
