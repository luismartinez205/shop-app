import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { Avatar, Badge, Tooltip } from 'antd';
import './Nav.css';

const items = [
  { key: '1', label: <span style={{ fontWeight: 'bold' }}>Audio & Video</span> },
  { key: '2', label: 'Computers' },
  { key: '3', label: 'Cameras' },
];

const login = [
  { key: '1', label: <span style={{ fontWeight: 'bold' }}>Registrarse</span> },
  { key: '2', label: 'Iniciar sesión' },
  { key: '3', label: 'Olvidé mi contraseña' },
];

function Nav({ cartCount }) {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  useEffect(() => {
    if (busqueda.trim() === '') {
      setResultados([]);
    } else {
      const filtrados = productos.filter((prod) =>
        prod.name.toLowerCase().includes(busqueda.toLowerCase())
      );
      setResultados(filtrados);
    }
  }, [busqueda, productos]);

  return (
    <div className="nav flex-nowrap position-relative">
      <div className="nav-links">
        <img
          src="https://png.pngtree.com/png-clipart/20230116/original/pngtree-online-shopping-logo-desing-png-image_8918925.png"
          alt="Shop logo"
          className="nav-img"
        />
        <h3>app</h3>
        <i className="bi bi-house-fill"></i>
        <a href="/">Inicio</a>
        <i className="bi bi-box"></i>
        <Dropdown menu={{ items }}>
          <Typography.Link>
            <Space>
              Productos
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <i className="bi bi-cart-fill"></i>
        <Tooltip title={`Tienes ${cartCount} producto${cartCount !== 1 ? 's' : ''} en el carrito`}>
          <a href="/cart">
            Carrito
            <Badge count={cartCount} offset={[8, -2]}>
              <Avatar shape="square" size="large" />
            </Badge>
          </a>
        </Tooltip>
        <i className="bi bi-journals"></i>
        <a href="/about">Catálogo</a>
        <i className="bi bi-telephone-fill"></i>
        <a href="/contact">Contacto</a>
        <i className="bi bi-person-circle"></i>
        <Dropdown menu={{ items: login }}>
          <Typography.Link>
            <Space>
              Login
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>

      <form className="d-flex formu position-relative" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2 fw-light"
          type="search"
          placeholder="Buscar productos"
          aria-label="Search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button className="btn btn-outline-info fw-bold" type="submit">
          Buscar
        </button>

        {busqueda && resultados.length > 0 && (
          <ul className="list-group position-absolute mt-2 w-100 shadow" style={{ top: '100%', zIndex: 1000 }}>
            {resultados.map((prod) => (
              <li key={prod.id} className="list-group-item list-group-item-action">
                {prod.name}
              </li>
            ))}
          </ul>
        )}

        {busqueda && resultados.length === 0 && (
          <ul className="list-group position-absolute mt-2 w-100 shadow" style={{ top: '100%', zIndex: 1000 }}>
            <li className="list-group-item text-muted">No se encontraron resultados</li>
          </ul>
        )}
      </form>
    </div>
  );
}

export default Nav;
