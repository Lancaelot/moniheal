/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { servicesDate } from '../../data/data';
import ServiceCard from './serviceCard/ServiceCard';
import './Services.scss';

const Services = () => {
  return (
    <section className="services">
      <div className="services__top">
        <div className="services__title">
          Послуги (28)
        </div>
        <button className="services__button">
          Показати всі
        </button>
      </div>
      <ul className="services__list">
        {servicesDate.map(serviceData => (
          <li className="services__list--item">
            <ServiceCard {...serviceData} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Services.propTypes = {

};

export default Services;