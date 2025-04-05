import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartIcon = ({ cart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="text-right mb-4">
      <Badge count={totalItems}>
        <button className="text-2xl bg-white p-3 rounded-full shadow">
          <ShoppingCartOutlined />
        </button>
      </Badge>
    </div>
  );
};

export default CartIcon;
