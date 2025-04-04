import { Link, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import { Search } from './Search';

import { RootState } from '../store/store';
import { Fragment } from 'react';
import { HeaderLogo } from '../components/HeaderLogo';
import { CartBtn } from '../components/CartBtn';

export const Header = () => {
  const { totalPrice, totalItems } = useSelector((state: RootState) => state.persistedReducerCart);

  //скрытие поиска и корзины при переходе на страницу Cart
  const location = useLocation();

  return (
    <header>
      <Link to="/">
        <HeaderLogo />
      </Link>
      {location.pathname !== '/cart' && (
        <Fragment>
          <Search />
          <Link to="/cart">
            <CartBtn totalItems={totalItems} totalPrice={totalPrice} />
          </Link>
        </Fragment>
      )}
    </header>
  );
};
