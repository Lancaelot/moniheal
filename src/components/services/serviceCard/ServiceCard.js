import React from 'react';
import PropTypes from 'prop-types';
import timeIcon from '../../../icons/service/time.svg';
import payIcon from '../../../icons/service/pay.svg';
import './ServiceCard.scss';

const ServiceCard = ({ name, type, time, price }) => (
  <div className="service-card">
    <div className="service-card__title">
      {name}
    </div>
    <div className="service-card__text">
      {type}
    </div>
    <div className="service-card__body">
      <div className="service-card__time">
        <img
          alt="time-icon"
          src={timeIcon}
          className="service-card__time--icon"
        />
        <div className="service-card__time--text">
          {time}
        </div>
      </div>
      <div className="service-card__price">
        <img
          alt="price-icon"
          src={payIcon}
          className="service-card__price--icon"
        />
        <div className="service-card__price--text">
          {price}
        </div>
      </div>
    </div>
  </div>
);

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ServiceCard;
