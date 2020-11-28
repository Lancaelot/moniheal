import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { newsData } from '../../data/newsData';
import NewsCard from './NewsCard/NewsCard';
import './News.scss';

const News = ({ currSize }) => {
  const news = [...newsData];
  const [isMore, setIsMore] = useState(false);
  const countCards = () => {
    if (currSize.width <= 1520 && currSize.width > 1090) {
      return 3;
    }

    if (currSize.width <= 1090 && currSize.width > 675) {
      return 2;
    }

    if (currSize.width <= 675) {
      return 1;
    }

    return 4;
  };

  const displayedCards = !isMore ? news.slice(0, countCards()) : news;
  const [currNews, setCurrNews] = useState(displayedCards);

  useEffect(() => {
    setCurrNews(displayedCards);
    countCards();
  }, [currSize, isMore]);

  return (
    <section className="news">
      <div className="subtitle">
        Новини клініки (28)
      </div>
      <ul className="news__list">
        {currNews.map((newData, index) => (
          <li className="news__item" key={newData.id}>
            <NewsCard {...newData} />
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsMore(!isMore)}
        type="button"
        className="button-more news__button-more"
      >
        {!isMore ? 'Показати ще' : 'Приховати деталі'}
      </button>
    </section>
  );
};

News.propTypes = {
  currSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

News.defaultProps = {
  currSize: PropTypes.shape({
    width: 0,
    height: 0,
  }),
};

export default News;
