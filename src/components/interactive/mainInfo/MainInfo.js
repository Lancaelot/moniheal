import React from 'react';
import './MainInfo.scss';
import logo from '../../../images/parens.svg';
import starIcon from '../../../icons/interactive/star.svg';
import gpsIcon from '../../../icons/interactive/gps.svg';
import phoneIcon from '../../../icons/interactive/phone.svg';
import moreIcon from '../../../icons/interactive/more.svg';
import websiteIcon from '../../../icons/interactive/web.svg';

const MainInfo = () => (
  <div className="main-info">
    <div className="main-info__container">
      <img
        alt="information log"
        src={logo}
        className="main-info__logo"
      />
      <div className="main-info__body">
        <h1 className="main-info__title">
          Parens-Україна
        </h1>
        <div className="main-info__rating">
          <img
            alt="rating-star"
            src={starIcon}
            className="main-info__rating--star"
          />
          <div className="main-info__rating--text">
            4,8
          </div>
        </div>
      </div>
      <div className="main-info__subtitle">
        Центр репродукції
      </div>
      <div className="main-info__location">
        <img
          alt="location-icon"
          src={gpsIcon}
          className="main-info__location--icon"
        />
        <div className="main-info__location--address">
          м. Київ, вул. Михайла Максимовича (Трутенка), 3, Голосіївський район
        </div>
      </div>
      <div className="main-info__phone">
        <img
          alt="phone-icon"
          src={phoneIcon}
          className="main-info__phone--icon"
        />
        <div className="main-info__phone--address">
          +38 (050) 137 - 60 - 41
        </div>
        <button
          type="button"
          className="main-info__phone--button"
        >
          <img
            alt="more"
            src={moreIcon}
          />
        </button>
      </div>
      <div className="main-info__website">
        <img
          alt="website-icon"
          src={websiteIcon}
          className="main-info__website--icon"
        />
        <div className="main-info__website--address">
          smartmedicalcenter.ua
        </div>
      </div>
      <button
        type="button"
        className="main-info__button"
      >
        Перезвоніть мені
      </button>
    </div>
  </div>
);

export default MainInfo;
