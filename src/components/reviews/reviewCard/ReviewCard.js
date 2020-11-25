import React from 'react';
/* eslint-disable */
import PropTypes from 'prop-types';
import './ReviewCard.scss';
import avatar from '../../../icons/reviews/avatar.png'
const ReviewCard = ({ name, status, date, text}) => {
  return (
    <div className="review-card">
      <div className="review-card__top">
        <img src={avatar} className="review-card__avatar" />
        <div className="review-card__info">
          <div className="review-card__name">
            {name}
          </div>
          {
            status === 'Позитивний'
            ? (
              <div className="review-card__status">
                {status}
              </div>
              )
              : (
              <div className="review-card__status--negative">
                {status}
              </div>
              )
          }
        </div>
      </div>
      <div className="review-card__body">
        <div className="review-card__date">
          {date}
        </div>
        <div className="review-card__text">
          {text}
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {

};

export default ReviewCard;