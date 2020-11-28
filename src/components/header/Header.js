/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import lock from '../../icons/lock.svg';
import Search from "./Search/Search";
import Lang from "./Lang/Lang";
import Login from "./Login/Login";
import Burger from "./Burger/Burger";
import logoIcon from '../../icons/logo.svg';

const Header = props => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logoIcon} className="header__logo" />
        <Search />
      </div>
     <div className="header__right">
       <Lang />
       <Login />
       <Burger />
     </div>
    </header>
  );
};

Header.propTypes = {

};

export default Header;