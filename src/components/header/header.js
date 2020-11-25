/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import lock from '../../icons/lock.svg';

const Header = props => {
  return (
    <header className="header">
      <div className="logo header__logo" />
      <div className="search header__search">
        <input
          className="search__input"
          placeholder="Пошук фахівця"
        />
        <button
          className="button search__button">
          Знайти
        </button>
      </div>
      <div className="lang header__lang">
        <select name="langSelect" className="lang__select">
          <option value="ua" className="lang__value">Укр</option>
          <option value="ru">Рус</option>
          <option value="en">Eng</option>
        </select>
      </div>
      <button className="button header__button">
        <img src={lock} className="header__button--lock" />
        Увійти
      </button>
      <div className="menu header__menu">
        <div>Меню</div>
        <span className="menu__burger"></span>
      </div>
    </header>
  );
};

Header.propTypes = {

};

export default Header;