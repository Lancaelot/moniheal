import React, { useState } from 'react';
import './Specialists.scss';
import PropTypes from 'prop-types';
import { specialistsData } from '../../data/data';

const Specialists = ({ currSize }) => {
  const [isMore, setIsMore] = useState(false);

  return (
    <section className="specialists" id="specialists">
      <div className="specialists__top">
        <div className="specialists__title">
          Спеціальності (43)
        </div>
        <button
          onClick={() => setIsMore(!isMore)}
          type="button"
          className="specialists__button"
        >
          Показати всі
        </button>
      </div>
      <ul className="specialists__list">
        <div className="specialists__list--a">
          { specialistsData.map(specialist => (
            specialist.position.startsWith('А') && (
              <li className="specialists__item" key={specialist.position}>
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
              <li className="specialists__item" key={specialist.position}>
                <span className="specialists__item--main">
                  {specialist.position[0]}
                </span>
                {specialist.position.slice(1)}
              </li>
            )))}
        </div>
        {/* eslint-disable-next-line no-mixed-operators */}
        {currSize.width > 705 || currSize.width < 705 && isMore
          ? (
            <div className="specialists__list--all">
              { specialistsData.map(specialist => (
                !specialist.position.startsWith('Г')
                && !specialist.position.startsWith('А')
                  ? (
                    <li className="specialists__item" key={specialist.position}>
                      <span className="specialists__item--main">
                        {specialist.position[0]}
                      </span>
                      {specialist.position.slice(1)}
                    </li>
                  )
                  : ''))}
            </div>
          )
          : ''
        }
      </ul>
    </section>
  );
};

Specialists.propTypes = {
  currSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

Specialists.defaultProps = {
  currSize: PropTypes.shape({
    width: 0,
    height: 0,
  }),
};

export default Specialists;
