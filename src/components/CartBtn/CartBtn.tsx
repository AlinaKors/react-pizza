import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/selectors';
import { CartBtnComponent } from './CartBtnComponent';
// import { calcTotalPrice } from '../../utils/calcTotalPrice';

//кнопка для перехода в корзину
export const CartBtn = () => {
  const { totalItems, totalPrice } = useSelector(selectCart);

  //   const totalPrice = calcTotalPrice(items);

  return <CartBtnComponent totalPrice={totalPrice} totalItems={totalItems} />;
};
