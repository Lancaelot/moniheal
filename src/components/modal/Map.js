import React from 'react';
import PropTypes from 'prop-types';
import './Map.scss';
import './BackDrop.scss';
import { scheduleData } from '../../data/scheduleData';
import mapButton from '../../icons/map/button.svg';
import logoIcon from '../../icons/backdrop-map/logo.png';
import starIcon from '../../icons/backdrop-map/star.svg';
import doctorsIcon from '../../icons/backdrop-map/doctors.svg';
import servicesIcon from '../../icons/backdrop-map/services.svg';

export const Map = ({ handleBackdrop }) => (
  <div className="backdrop">
    <div className="backdrop-map__container">
      <button
        type="button"
        onClick={() => handleBackdrop()}
        className="backdrop-map__button"
      >
        <img
          alt="map"
          src={mapButton}
        />
      </button>
      <div className="backdrop-map__map" />
      <div className="backdrop-map__card">
        <div className="backdrop-map__top">
          <img
            alt="logo-icon"
            src={logoIcon}
            className="backdrop-map__logo"
          />
          <div className="backdrop-map__top--row">
            <div className="backdrop-map__title">
              Flexis: Рух без болі
            </div>
            <div className="backdrop-map__text">
              Медичний центр
            </div>
          </div>
        </div>
        <div className="backdrop-map__info">
          <div className="backdrop-map__rating">
            <div className="backdrop-map__subtitle">
              Рейтинг
            </div>
            <div className="backdrop-map__info--container">
              <img
                alt="star"
                src={starIcon}
                className="backdrop-map__star-icon"
              />
              <div className="backdrop-map__text-info">
                4,6
              </div>
            </div>
          </div>
          <div className="backdrop-map__doctors">
            <div className="backdrop-map__subtitle">
              Лікарів
            </div>
            <div className="backdrop-map__info--container">
              <img
                alt="doctor"
                src={doctorsIcon}
                className="backdrop-map__doctor-icon"
              />
              <div className="backdrop-map__text-info">
                28
              </div>
            </div>
          </div>
          <div className="backdrop-map__services">
            <div className="backdrop-map__subtitle">
              Послуг
            </div>
            <div className="backdrop-map__info--container">
              <img
                alt="service"
                src={servicesIcon}
                className="backdrop-map__service-icon"
              />
              <div className="backdrop-map__text-info">
                10
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-map__bottom">
          <div className="backdrop-map__address">
            <div className="backdrop-map__subtitle">
              Адреса
            </div>
            <div className="backdrop-map__text">
              м. Київ, вул. Михайла Максимовича (Трутенка), 3,
              Голосіївський район
            </div>
          </div>
          <div className="backdrop-map__schedule">
            <div className="backdrop-map__subtitle">
              Графік роботи
            </div>
            <ul className="backdrop-map__list">
              { scheduleData.map(weekDay => (
                <li className="backdrop-map__item" key={weekDay.day}>
                  <span className="backdrop-map__text">
                    {weekDay.day}
                    :
                  </span>
                  <span className="backdrop-map__text-info">
                    {weekDay.dayShedule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Map.propTypes = {
  handleBackdrop: PropTypes.func.isRequired,
};
