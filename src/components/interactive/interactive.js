/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './interactive.scss';

const Interactive = props => {
  return (
    <section className="interactive">
      <div className="interactive__left">
        <div className="interactive__logo"></div>
        <div className="interactive__text">
          <h2 className="interactive__title">Parens-Україна</h2>
          <div className="interactive__rating">
            <div className="interactive__rating--star"></div>
            <div className="interactive__rating--text"></div>
          </div>
        </div>
        <div className="interactive__subtitle">
          Центр репродукції
        </div>
        <div className="interactive__body">
          <div className="interactive__location">
            <div className="interactive__location--icon"></div>
            <div className="interactive__location--address">
              м. Київ, вул. Михайла Максимовича (Трутенка), 3, Голосіївський район
            </div>
          </div>
          <div className="interactive__phone">
            <div className="interactive__phone--icon"></div>
            <div className="interactive__phone--address">
              +38 (050) 137 - 60 - 41
            </div>
            <button className="interactive__phone--button" />
          </div>
          <div className="interactive__website">
            <div className="interactive__website--icon"></div>
            <div className="interactive__website--address">
              smartmedicalcenter.ua
            </div>
          </div>
        </div>
        <button className="interactive__button">
          Перезвоніть мені
        </button>
      </div>
      <div className="interactive__right">
        <div className="interactive__gallery">
          <div className="interactive__gallery--icon"></div>
          <div className="interactive__gallery--text">
            Переглянути 12 Фото
          </div>
        </div>
        <div className="interactive__map">
          <div className="interactive__map--icon"></div>
          <div className="interactive__map--text">
            Клініка на мапі
          </div>
        </div>
      </div>
    </section>
  );
};

Interactive.propTypes = {

};

export default Interactive;