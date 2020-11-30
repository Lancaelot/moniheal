import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { doctorsData } from '../../data/doctorsData';
import DoctorCard from './doctorCard/DoctorCard';
import './Doctors.scss';

const Doctors = ({ currSize }) => {
  const doctors = [...doctorsData];

  const [isMore, setIsMore] = useState(false);

  const countCards = () => {
    if (currSize.width <= 1520 && currSize.width > 1090) {
      return 3;
    }

    if (currSize.width <= 1090 && currSize.width > 675) {
      return 2;
    }

    if (currSize.width <= 675) {
      return 1;
    }

    return 4;
  };

  const displayedCards = !isMore
    ? doctors.slice(0, countCards())
    : doctors;
  const [currDoctors, setCurrDoctors] = useState(displayedCards);

  useEffect(() => {
    setCurrDoctors(displayedCards);
    countCards();
  }, [currSize, isMore]);

  return (
    <section className="doctors">
      <div className="doctors__top">
        <div className="subtitle">Лікарі (28)</div>
        <button
          type="button"
          onClick={() => setIsMore(!isMore)}
          className="show-button doctors__show-button"
        >
          Показати всі
        </button>
      </div>
      <ul className="doctors__list">
        <button
          type="button"
          className="button-forward doctors__button-forward"
        />
        <button
          type="button"
          className="button-backward doctors__button-backward"
        />
        {currDoctors.map(doctor => (
          <li className="doctors__item" key={doctor.id}>
            <DoctorCard {...doctor} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Doctors.propTypes = {
  currSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

Doctors.defaultProps = {
  currSize: PropTypes.shape({
    width: 0,
    height: 0,
  }),
};

export default Doctors;
