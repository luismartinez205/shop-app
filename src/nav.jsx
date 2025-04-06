import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { Avatar, Badge,Tooltip } from 'antd';
import './Nav.css';

const items = [
  {
    key: '1',
    
    label: <span style={{ fontWeight: 'bold' }}>Audio & Video</span>,
  },
  {
    key: '2',
    label: 'Computers',
  },
  {
    key: '3',
    label: 'Cameras',
  },
];

const login = [
  {
    key: '1',
    
    label: <span style={{ fontWeight: 'bold' }}>Registrarse</span>,
  },
  {
    key: '2',
    label: 'Iniciar sesión',
  },
  {
    key: '3',
    label: 'Olvidé mi contraseña',
  },
];

function Nav({ cartCount }) {
  return (
    <div className="nav">
      <div className="nav-links">
        <img
          src="https://png.pngtree.com/png-clipart/20230116/original/pngtree-online-shopping-logo-desing-png-image_8918925.png"
          alt="Shop logo" className='nav-img'    />
        <h3>app</h3>
        <i className="bi bi-house-fill"></i>
        <a href="/">Home</a>
        <i className="bi bi-box"></i>
        <Dropdown menu={{ items }}>
          <Typography.Link>
            <Space>
              Products
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <i className="bi bi-cart-fill"></i>
        <Tooltip title={`Tienes ${cartCount} producto${cartCount !== 1 ? 's' : ''} en el carrito`}>
  <a href="/cart">
    Cart
    <Badge count={cartCount} offset={[8, -2]}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
</Tooltip>
        <i className="bi bi-person-fill"></i>
        <a href="/about">About us</a>
        <i className="bi bi-telephone-fill"></i>
        <a href="/contact">Contact</a>
        <i className="bi bi-person-circle"></i>
        <Dropdown menu={{items:login }}>
          <Typography.Link>
            <Space>
              Login
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
    </div>
  );
}

export default Nav;