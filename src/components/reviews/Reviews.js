/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { reviewsData } from '../../data/data';
import ReviewCard from "./reviewCard/ReviewCard";
import './Reviews.scss';

const Reviews = props => {
  return (
    <section className="reviews">
      <div className="subtitle">
        Відгуки (14)
      </div>
      <ul className="reviews__list">
        { reviewsData.map(review => (
          <li className="reviews__item">
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
      <button className="button-more reviews__button-more">
        Показати ще
      </button>
    </section>
  );
};

Reviews.propTypes = {

};

export default Reviews;