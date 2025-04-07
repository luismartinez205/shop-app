import './App.css';
import './Nav.css';
import Nav from './nav';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubUser from './GitHubUser';

const App = () => { 
  const [cart] = useState([]);

  return (
    <div className="App">
      <Nav cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <div className="d-flex justify-content-between align-items-center column-gap-5">
        <div className="d-flex flex-column w-50 p-5">
          <h1 className="hero-title">Descubre lo Mejor de la Moda en un Solo Lugar</h1>
          <p className="hero-description fw-light">
          Encuentra productos exclusivos a precios increíbles, ¡directo a tu puerta!           
          </p>
          <button className="btn btn-info mt-5 fw-bold">Compra Ahora</button>          
          </div>
          <div className="hero-imagen">
                    <img src="https://grupoprom.com/wp-content/uploads/2024/09/que-es-una-tienda-retail.webp" alt="Hero" className='w-100 p-4'/>
            </div>
        </div>
      <GitHubUser username="luismartinez205" />       
    </div>
  );
}
export default App;
