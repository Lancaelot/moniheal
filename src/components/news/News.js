/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { newsData } from '../../data/newsData';
import NewsCard from "./NewsCard/NewsCard.js";
import './News.scss';

const News = props => {
  return (
    <section className="news">
      <div className="subtitle">
        Новини клініки (28)
      </div>
      <ul className="news__list">
        {newsData.map(newData => (
          <li className="news__item">
            <NewsCard {...newData} />
          </li>
        ))}
      </ul>
    </section>
  );
};

News.propTypes = {

};

export default News;