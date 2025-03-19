import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '../redux/slices/cartSlice';

import IconDelete from '../assets/img/cartDelete.svg?react';
import IconBack from '../assets/img/back.svg?react';

import { EmptyCart } from '../components/EmptyCart';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const { totalPrice, items, totalItems } = useSelector((state) => state.cart);

  return totalItems ? (
    <div className="cartWrapper">
      <div className="cartTop">
        <div className="cartName">
          <img src="src/assets/img/cartBig.png" alt="cart icon" />
          <h1>Корзина</h1>
        </div>
        <button className="deleteItems" onClick={handleClearCart}>
          <IconDelete />
          <span>Очистить корзину</span>
        </button>
      </div>
      <div className="cartItems">
        <ul>
          {items.map((product) => (
            <CartItem product={product} key={product.key} />
          ))}
        </ul>
      </div>
      <div className="cartTotal">
        <div className="totalItems">
          Всего пицц: <span>{totalItems} шт.</span>
        </div>
        <div className="totalPrice">
          Сумма заказа: <span>{totalPrice} ₽</span>
        </div>
      </div>
      <div className="cartBottom">
        <Link to="/">
          <button className="backBtn">
            <IconBack />
            Вернуться назад
          </button>
        </Link>
        <button className="orderBtn">Оплатить сейчас</button>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};
