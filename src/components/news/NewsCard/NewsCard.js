import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.scss';
import eyeIcon from '../../../icons/news/eye.svg';
import commentIcon from '../../../icons/news/comment.svg';

const NewsCard = ({ title, date, views, comments, url }) => (
  <div className="news-card">
    <img
      alt="news"
      src={url}
      className="news-card__image"
    />
    <div className="news-card__title">
      {title}
    </div>
    <div className="news-card__bottom">
      <div className="news-card__subtext">
        { date }
      </div>
      <div className="news-card__bottom--right">
        <div className="news-card__views">
          <img
            alt="views-icon"
            src={eyeIcon}
            className="news-card__icon"
          />
          <div className="news-card__subtext">
            { views }
          </div>
        </div>
        <div className="news-card__comments">
          <img
            alt="comments-icon"
            src={commentIcon}
            className="news-card__icon"
          />
          <div className="news-card__subtext">
            { comments }
          </div>
        </div>
      </div>
    </div>
  </div>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsCard;
