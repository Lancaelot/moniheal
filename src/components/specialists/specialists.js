import React from 'react';
/* eslint-disable */
import PropTypes from 'prop-types';
import './specialists.scss';
import { specialistsData } from '../../data/data';

const Specialists = props => {
  return (
    <section className="specialists">
      <div className="specialists__top">
        <div className="specialists__title">
          Спеціальності (43)
        </div>
        <button className="specialists__button">
          Показати всі
        </button>
      </div>
      <ul className="specialists__list">
        <div className="specialists__list--a">
          { specialistsData.map(specialist => (
            specialist.position.startsWith('А') && (
              <li className="specialists__item">
                  <span className="specialists__item--main">
                    {specialist.position[0]}
                  </span>
                {specialist.position.slice(1)}
              </li>
            )))}
        </div>
        <div className="specialists__list--g">
          { specialistsData.map(specialist => (
            specialist.position.startsWith('Г') && (
              <li className="specialists__item">
                  <span className="specialists__item--main">
                    {specialist.position[0]}
                  </span>
                {specialist.position.slice(1)}
              </li>
            )))}
        </div>
        <div className="specialists__list--all">
          { specialistsData.map(specialist => (
            !specialist.position.startsWith('Г') && !specialist.position.startsWith('А')
              ? (
                <li className="specialists__item">
                    <span className="specialists__item--main">
                      {specialist.position[0]}
                    </span>
                  {specialist.position.slice(1)}
                </li>
              )
              : ''))}
        </div>
      </ul>
    </section>
  );
};

Specialists.propTypes = {

};

export default Specialists;