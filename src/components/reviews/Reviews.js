import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { reviewsData } from '../../data/data';
import ReviewCard from './reviewCard/ReviewCard';
import './Reviews.scss';

const Reviews = ({ currSize }) => {
  const reviews = [...reviewsData];
  const [isMore, setIsMore] = useState(false);
  const countCards = () => {
    if (currSize.width < 1660 && currSize.width > 1520) {
      return 4;
    }

    if (currSize.width <= 1520 && currSize.width > 1090) {
      return 3;
    }

    if (currSize.width <= 1090 && currSize.width > 675) {
      return 2;
    }

    if (currSize.width <= 675) {
      return 1;
    }

    return 3;
  };

  const displayedCards = !isMore ? reviews.slice(0, countCards()) : reviews;
  const [currReviews, setCurrReviews] = useState(displayedCards);

  useEffect(() => {
    setCurrReviews(displayedCards);
    countCards();
  }, [currSize, isMore]);

  return (
    <section className="reviews">
      <div className="subtitle">
        Відгуки (14)
      </div>
      <ul className="reviews__list">
        { currReviews.map(review => (
          <li className="reviews__item" key={review.id}>
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="button-more reviews__button-more"
        onClick={() => setIsMore(!isMore)}
      >
        {!isMore ? 'Показати ще' : 'Приховати деталі'}
      </button>
    </section>
  );
};

Reviews.propTypes = {
  currSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

Reviews.defaultProps = {
  currSize: PropTypes.shape({
    width: 0,
    height: 0,
  }),
};

export default Reviews;
