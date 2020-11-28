import React from 'react';
import './Schedule.scss';
import { scheduleData } from '../../../data/scheduleData';

const Schedule = () => (
  <div className="schedule about__schedule">
    <div className="schedule__title">
      Графік роботи
    </div>
    <ul className="schedule__list">
      { scheduleData.map(weekDay => (
        <li className="schedule__item" key={weekDay.day}>
          <span className="schedule__day">
            {weekDay.day}
            :
          </span>
          <span className="schedule__time">
            {weekDay.dayShedule}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default Schedule;
