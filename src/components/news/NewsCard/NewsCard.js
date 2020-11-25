/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.scss';
import imgurl from '../../../images/news/1.png'

const NewsCard = ({ imageId, title, date, views, comments }) => {

  return (
    <div className="news-card">
      <img src={imgurl} className="news-card__image" />
      <div className="news-card__title">
        {title}
      </div>
      <div className="news-card__bottom">
        <div className="news-card__date new-card__subtext">
          { date }
        </div>
        <div className="news-card__views">
          <div className="news-card__views--icon" />
          <div className="news-card__views--count">
            { views }
          </div>
        </div>
        <div className="news-card__comments">
          <div className="news-card__comments--icon" />
          <div className="news-card__comments--count">
            { comments }
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {

};

export default NewsCard;