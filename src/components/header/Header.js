import React from 'react';
import './Header.scss';
import Search from './Search/Search';
import Lang from './Lang/Lang';
import Login from './Login/Login';
import Burger from './Burger/Burger';
import logoIcon from '../../icons/logo.svg';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <img
        alt="logo"
        src={logoIcon}
        className="header__logo"
      />
      <Search />
    </div>
    <div className="header__right">
      <Lang />
      <Login />
      <Burger />
    </div>
  </header>
);

export default Header;
