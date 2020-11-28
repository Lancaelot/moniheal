import React from 'react';
import './Lang.scss';

const Lang = () => (
  <form className="lang">
    <select name="lang" className="lang__select">
      <option value="ua" className="lang__value">Укр</option>
      <option value="ru" className="lang__value">Рус</option>
      <option value="en" className="lang__value">Eng</option>
    </select>
  </form>
);

export default Lang;
