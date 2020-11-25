/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export const Nav = props => {
  return (
    <nav className="nav header__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link">
            Про клініку
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Спеціальності
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Послуги
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Лікарі
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Відгуки
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Новини
          </a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {

};
