import React from 'react';
import './Search.scss';

const Search = () => (
  <form className="search">
    <input
      className="search__input"
      placeholder="Пошук фахівця"
    />
    <button
      type="submit"
      className="search__button"
    >
      Знайти
    </button>
  </form>
);

export default Search;
