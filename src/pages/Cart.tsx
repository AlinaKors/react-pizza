import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct, clearCart, deleteAllProduct, deleteProduct } from '../store/cart/slice';

import IconDelete from '../assets/img/cartDelete.svg?react';
import IconBack from '../assets/img/back.svg?react';

import { EmptyCart } from '../components/EmptyCart';
import { CartItem } from '../components/CartItem';
import { RootState } from '../store/store';
import { Button } from '../components/Button';
import { ItemType, ProductType } from '../store/cart/types';

export const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const { totalPrice, items, totalItems } = useSelector(
    (state: RootState) => state.persistedReducerCart,
  );

  const handleDeleteAllProduct = (product: ProductType, item: ItemType) => {
    dispatch(
      deleteAllProduct({ key: product.key, id: item.id, price: item.price, count: item.count }),
    );
  };

  const handleDeleteProduct = (product: ProductType, item: ItemType) => {
    dispatch(
      deleteProduct({ key: product.key, id: item.id, price: item.price, count: item.count }),
    );
  };

  const handleAddProduct = (product: ProductType) => {
    dispatch(addProduct(product));
  };

  return totalItems ? (
    <div className="cartWrapper">
      <div className="cartTop">
        <div className="cartName">
          <img src="src/assets/img/cartBig.png" alt="cart icon" />
          <h1>Корзина</h1>
        </div>
        <Button
          handleClick={handleClearCart}
          textBtn={'Очистить корзину'}
          classNameBtn={'deleteItems'}
        >
          <IconDelete />
        </Button>
      </div>
      <div className="cartItems">
        <ul>
          {items.map((product) => (
            <CartItem
              product={product}
              key={product.key}
              handleAddProduct={handleAddProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleDeleteAllProduct={handleDeleteAllProduct}
            />
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
          <Button textBtn={'Вернуться назад'} classNameBtn={'backBtn'}>
            <IconBack />
          </Button>
        </Link>
        <Button textBtn={'Оплатить сейчас'} classNameBtn={'orderBtn'} />
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};
