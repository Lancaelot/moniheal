import React from 'react';
/* eslint-disable */
import PropTypes from 'prop-types';
import { doctorsData } from '../../data/data';
import DoctorCard from "./doctorCard/DoctorCard";
import './Doctors.scss';

const Doctors = props => {
  return (
    <div className="doctors">
      <div className="doctors__top">
        <div className="subtitle">Лікарі (28)</div>
        <div className="show-button doctors__show-button">
          Показати всі
        </div>
      </div>
      <ul className="doctors__list">
        <button className="button-forward doctors__button-forward" />
        <button className="button-backward doctors__button-backward" />
        {doctorsData.map(doctor => (
          <li doctors__item>
            <DoctorCard {...doctor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Doctors.propTypes = {
  
};

export default Doctors;