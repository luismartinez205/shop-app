const Cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="bg-white shadow-md rounded-xl p-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">🛒 Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <strong>{item.name}</strong> x {item.quantity}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    className="text-red-500 font-bold hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 text-right font-bold text-xl">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    );
  };
  
  export default Cart;
  