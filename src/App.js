

import './App.css';
import './Nav.css';
import Nav from './nav';
import React from 'react';
import { Carousel } from 'antd';




function App() {
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
  </div>
    
  );
}

export default App;
