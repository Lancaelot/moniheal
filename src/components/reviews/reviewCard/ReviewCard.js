import React from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.scss';
import avatar from '../../../icons/reviews/avatar.png';

const ReviewCard = ({ name, status, date, text }) => (
  <div className="review-card">
    <div className="review-card__top">
      <img
        alt="avatar"
        src={avatar}
        className="review-card__avatar"
      />
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

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewCard;
