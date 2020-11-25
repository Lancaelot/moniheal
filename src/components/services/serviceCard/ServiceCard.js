/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import timeIcon from '../../../icons/service/time.svg';
import payIcon from '../../../icons/service/pay.svg';
import './ServiceCard.scss';

const ServiceCard = ({ name, type, time, price }) => {
  return (
    <div className="service-card">
      <div className="service-card__title">
        {name}
      </div>
      <div className="service-card__text">
        {type}
      </div>
      <div className="service-card__body">
        <div className="service-card__time">
          <img src={timeIcon} className="service-card__time--icon" />
          <div className="service-card__time--text">
            {time}
          </div>
        </div>
        <div className="service-card__price">
          <img src={payIcon} className="service-card__price--icon" />
          <div className="service-card__price--text">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  
};

export default ServiceCard;