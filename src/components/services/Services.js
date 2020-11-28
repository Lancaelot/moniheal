import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { servicesDate } from '../../data/data';
import ServiceCard from './serviceCard/ServiceCard';
import './Services.scss';

const Services = ({ currSize }) => {
  const services = [...servicesDate];
  const [isMore, setIsMore] = useState(false);

  const countCards = () => {
    if (currSize.width < 1580 && currSize.width > 950) {
      return 3;
    }

    if (currSize.width <= 950 && currSize.width > 675) {
      return 2;
    }

    if (currSize.width <= 675) {
      return 1;
    }

    return 4;
  };

  const displayedCards = !isMore
    ? services.slice(0, countCards())
    : services;
  const [currServices, setCurrServices] = useState(displayedCards);

  useEffect(() => {
    setCurrServices(displayedCards);
    countCards();
  }, [currSize, isMore]);

  return (
    <section className="services">
      <div className="services__top">
        <div className="services__title">
          Послуги (28)
        </div>
        <button
          onClick={() => setIsMore(!isMore)}
          type="button"
          className="services__button"
        >
          Показати всі
        </button>
      </div>
      <ul className="services__list">
        <button
          type="button"
          className="button-forward services__button-forward"
        />
        <button
          type="button"
          className="button-backward services__button-backward"
        />
        {currServices.map(serviceData => (
          <li className="services__list--item" key={serviceData.id}>
            <ServiceCard {...serviceData} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Services.propTypes = {
  currSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

Services.defaultProps = {
  currSize: PropTypes.shape({
    width: 0,
    height: 0,
  }),
};

export default Services;
