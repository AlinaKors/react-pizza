import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/selectors';
import { CartBtnComponent } from './CartBtnComponent';
import { calcTotal } from '../../utils/calcTotal';

//кнопка для перехода в корзину
export const CartBtn = () => {
  const { items } = useSelector(selectCart);

  const { totalPrice, totalItems } = calcTotal(items);

  return <CartBtnComponent totalPrice={totalPrice} totalItems={totalItems} />;
};
