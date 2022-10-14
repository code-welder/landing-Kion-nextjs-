import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.scss';

import Button from '@components/shared/Button';
import Logo from '@components/shared/Logo';
import Navigation, {
  NavigationLink,
} from '@components/Header/components/Navigation';
import Search from '@components/Header/components/Search';

import CloseIcon from '@icons/close.svg';
import HamburgerIcon from '@icons/hamburger.svg';
import SearchButton from '@components/Header/components/SearchButton';
import { useBodyOverflowStyle, useKeyPress } from 'hooks';

const links: NavigationLink[] = [
  {
    title: 'Product',
    href: '#product',
  },
  {
    title: 'Resources',
    href: '#',
  },
  {
    title: 'Support',
    href: '#',
  },
  {
    title: 'About',
    href: '#about',
  },
];

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [headerOnScroll, setHeaderOnScroll] = useState(false);
  const setBodyOverflow = useBodyOverflowStyle();

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);

  useKeyPress('Escape', closeSearch);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHeaderOnScroll(true);
      } else {
        setHeaderOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  useEffect(() => {
    if (showMenu || showSearch) setBodyOverflow('hidden');

    return () => setBodyOverflow('visible');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMenu, showSearch]);

  return (
    <header className={clsx(styles.wrapper, headerOnScroll && styles.onscroll)}>
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
          <a
            href="#main"
            className="a11y"
          >
            Skip to main content
          </a>
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
            onLinkClick={closeMenu}
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
