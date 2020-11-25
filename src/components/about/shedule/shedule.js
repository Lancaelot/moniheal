/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './shedule.scss';
import { currShedule} from "../../../data/data";

const Shedule = props => {
  return (
    <div className="shedule about__shedule">
      <div className="shedule__title">
        Графік роботи
      </div>
      <ul className="shedule__list">
        { currShedule.map(weekDay => (
          <li className="shedule__item">
            <span className="shedule__day">{weekDay.day}:</span>
            <span className="shedule__time">{weekDay.dayShedule}</span>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

Shedule.propTypes = {

};

export default Shedule;