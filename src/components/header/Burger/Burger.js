import React from 'react';
import './Burger.scss';

const Burger = () => (
  <div className="burger">
    <button
      type="button"
      className="burger__button"
    >
      <div>Меню</div>
      <span className="burger__menu" />
    </button>
  </div>
);

export default Burger;
