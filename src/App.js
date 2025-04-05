

import './App.css';
import './Nav.css';
import Nav from './nav';
import { Carousel } from 'antd';
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCart";



function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const categorias = ["Todos", ...new Set(products.map(p => p.category))];

  const filteredProducts = filter === "Todos"
    ? products
    : products.filter(p => p.category === filter);
  return (
    
    <div className="">
      <Nav />
 
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
      <h1 className="text-3xl font-bold mb-6 text-center">Catálogo de Productos</h1>

      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-xl text-white ${filter === cat ? "bg-blue-600" : "bg-gray-500"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
    
  );
}

export default App;
