import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.scss';

import Button from '@components/Button';
import Logo from '@components/Logo';
import Navigation, { NavigationLink } from '@components/Navigation';
import Search from '@components/Search';

import CloseIcon from '@icons/close.svg';
import HamburgerIcon from '@icons/hamburger.svg';
import SearchButton from '@components/SearchButton';

const links: NavigationLink[] = [
  {
    title: 'Product',
    href: '',
  },
  {
    title: 'Resources',
    href: '',
  },
  {
    title: 'Support',
    href: '',
  },
  {
    title: 'About',
    href: '',
  },
];

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeSearch();
      }
    };

    if (showSearch) window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [showSearch]);

  return (
    <header className={styles.wrapper}>
      <div className={clsx(styles.inner, 'container')}>
        <Link
          href="/"
          passHref
        >
          <a
            className={styles.logo}
            title="Kion"
          >
            <Logo full />
          </a>
        </Link>

        <button
          className={styles.hamburger}
          onClick={openMenu}
          aria-controls="header-menu"
          aria-label="open menu"
        >
          <HamburgerIcon />
        </button>

        <div
          className={clsx(styles.menu, showMenu && styles.open)}
          id="header-menu"
        >
          <button
            className={styles.menu__close}
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>

          <Navigation
            links={links}
            wrapperClass={styles.nav}
            listClass={styles.nav__list}
          />

          <SearchButton
            className={styles.openSearch}
            onClick={openSearch}
            aria-controls="header-search"
            aria-label="open search"
          />

          <Button
            as="a"
            href="#"
            className={styles.demo}
          >
            Get a Demo
          </Button>
        </div>
      </div>

      <div
        className={clsx(styles.search, showSearch && styles.open)}
        id="header-search"
        onClick={closeSearch}
      >
        <div
          className={styles.search__inner}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container">
            <Search onSubmit={(e) => e.preventDefault()} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
