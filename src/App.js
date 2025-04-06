
import Cart from './Cart'; // Add this line to import the Cart component
// ...existing code...
import './App.css';
import './Nav.css';
import Nav from './nav';
import { Carousel } from 'antd';
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCart";
import CartIcon from './CarIcon'; // Import the CartIcon component
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubUser from './GitHubUser';


const App = () => {
 
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Cargar productos desde JSON
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Agregar al carrito
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Eliminar del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };


  // Actualizar cantidad en el carrito
  const updateCartQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, quantity) } // Asegura que la cantidad sea al menos 1
        : item
    ));
  };
  // Filtro de categorías
  const [filter, setFilter] = useState("Todos");
  useEffect(() => {
    setFilter("Todos"); // Reset filter when products change
  }
  , [products]);
  // Obtener categorías únicas
  if (!products.length) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los productos
  }
  // Asegurarse de que los productos tengan una categoría
  products.forEach(product => {
    if (!product.category) {
      product.category = "Sin categoría"; // Asignar una categoría por defecto si no existe
    }
  }
  );

  const categorias = ["Todos", ...new Set(products.map(product => product.category))];
  const filteredProducts = filter === "Todos"
    ? products
    : products.filter(product => product.category === filter);
  if (filteredProducts.length === 0) {
    return <div>No products found in this category.</div>; // Mensaje si no hay productos en la categoría seleccionada
  }
  // Renderizar la aplicación
  // Verifica si hay productos para mostrar
  if (filteredProducts.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">No products found in this category.</div>;
  }
  
  return (
    
    <div className="App">
      <Nav cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />

 
  <Carousel autoplay>
      <div>
       < img src="https://gdmiamiyorlando.b-cdn.net/wp-content/uploads/2018/08/SEARS-loja-miami-orlando.jpg" alt="img" className='carusel' />
      </div>
      <div>
      < img src="https://gdmiamiyorlando.b-cdn.net/wp-content/uploads/2018/08/SEARS-loja-miami-orlando.jpg" alt="img" className='carusel' />
 
      </div>
      <div>
      < img src="https://gdmiamiyorlando.b-cdn.net/wp-content/uploads/2018/08/SEARS-loja-miami-orlando.jpg" alt="img" className='carusel' />

      </div>
      <div>
      < img src="https://gdmiamiyorlando.b-cdn.net/wp-content/uploads/2018/08/SEARS-loja-miami-orlando.jpg" alt="img" className='carusel' />

      </div>
    </Carousel> 
    <div className='container'>
      <h1 className='title'>Welcome to our shop</h1>
      <p className='title'>We offer a wide range of products to suit your needs.</p>
      <button className='shop-button'>Shop Now</button> 
  </div>
  <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-primary text-center me-4"><img src="https://png.pngtree.com/png-clipart/20230116/original/pngtree-online-shopping-logo-desing-png-image_8918925.png" alt="img" className='logo' />Nuestro Catálogo</h1>
      <div className="d-flex gap-2 justify-content-center mb-6 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn btn-info m-2 fw-light ${filter === cat ? "bg-blue-600" : "bg-gray-500"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-stretch gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateCartQuantity={updateCartQuantity}/>
        ))}
      </div>
    </div>
    <CartIcon cart={cart} />
    <Cart cart={cart} removeFromCart={removeFromCart} />
    <GitHubUser username="luismartinez205" />    
  </div>
    
  );
}

export default App;
