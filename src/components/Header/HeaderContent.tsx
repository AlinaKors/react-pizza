import { Link, useLocation } from 'react-router';
import { CartBtn } from '../CartBtn';
import { Search } from '../Search';

export const HeaderContent = () => {
  const location = useLocation();

  // Показываем Search и CartBtn только если не на странице /cart
  if (location.pathname === '/cart') {
    return null; // Не отображаем ничего
  }

  return (
    <>
      <Search />
      <Link to="/cart">
        <CartBtn />
      </Link>
    </>
  );
};
