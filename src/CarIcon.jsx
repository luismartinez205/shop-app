import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {  Drawer } from 'antd';
  const CartIcon = ({ cart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="text-right mb-4">
      <Badge count={totalItems}>
        <button className="btn btn-light text-2xl bg-white p-3 rounded-full shadow" onClick={showDrawer}>
          <ShoppingCartOutlined />
        </button>
      </Badge>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default CartIcon;
