import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { Avatar, Badge } from 'antd';
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

function Nav() {
  return (
    <div className="nav">
      <div className="nav-links">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlj2kyclfog_GVLdNQRixPTDoyPVc0p7EEmg&s"
          alt="App Logo"
        />
        <h3>app</h3>
        <i className="bi bi-house-fill"></i>
        <a href="/">Home</a>
        <i className="bi bi-box"></i>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Typography.Link>
            <Space>
              Products
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <i className="bi bi-cart-fill"></i>
        <a href="/cart">Cart<Badge count={1}>
      <Avatar shape="square" size="large" />
    </Badge></a>
        <i className="bi bi-person-fill"></i>
        <a href="/about">About us</a>
        <i className="bi bi-telephone-fill"></i>
        <a href="/contact">Contact</a>
        <i className="bi bi-person-circle"></i>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}





export default Nav;