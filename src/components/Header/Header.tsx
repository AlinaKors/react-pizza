import { Link } from 'react-router';

import styles from './Header.module.scss';
import { HeaderLogo } from './HeaderLogo';
import { memo } from 'react';
import { HeaderContent } from './HeaderContent';

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <HeaderLogo />
      </Link>
      <HeaderContent />
    </header>
  );
});
