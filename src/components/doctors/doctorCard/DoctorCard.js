import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../icons/doctor/avatar.png';
import starIcon from '../../../icons/doctor/starIcon.svg';
import reviewIcon from '../../../icons/doctor/reviewIcon.svg';
import experienceIcon from '../../../icons/doctor/experienceIcon.svg';
import './DoctorCard.scss';

const DoctorCard = (
  { name, position, status, rating, reviews, experience },
) => (
  <div className="doctor-card">
    <div className="doctor-card__top">
      <div className="doctor-card__avatar">
        <img
          alt="doctor-icon"
          src={avatar}
          className="doctor-card__icon"
        />
        {status === 'Онлайн'
          ? <div className="doctor-card__status--online">{status}</div>
          : <div className="doctor-card__status">{status}</div>
        }
      </div>
      <div className="doctor-card__about">
        <div className="doctor-card__name">
          {name}
        </div>
        <div className="doctor-card__position">
          {position}
        </div>
      </div>
    </div>
    <div className="doctor-card__mid">
      <div className="doctor-card__rating">
        <div className="doctor-card__mid--wrapper">
          <div className="doctor-card__subtitle">Рейтинг</div>
          <div className="doctor-card__mid--container">
            <img
              alt="rating-icon"
              src={starIcon}
              className="doctor-card__rating--icon"
            />
            <div className="doctor-card__info-text">
              {rating}
            </div>
          </div>
        </div>
      </div>
      <div className="doctor-card__review">
        <div className="doctor-card__mid--wrapper">
          <div className="doctor-card__subtitle">Відкуків</div>
          <div className="doctor-card__mid--container">
            <img
              alt="review-icon"
              src={reviewIcon}
              className="doctor-card__review--icon"
            />
            <div className="doctor-card__info-text">
              {reviews}
            </div>
          </div>
        </div>
      </div>
      <div className="doctor-card__experience">
        <div className="doctor-card__mid--wrapper">
          <div className="doctor-card__subtitle">Досвід (років)</div>
          <div className="doctor-card__mid--container">
            <img
              alt="experience-icon"
              src={experienceIcon}
              className="doctor-card__experience--icon"
            />
            <div className="doctor-card__info-text">
              {experience}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="doctor-card__bottom">
      <div className="doctor-card__subtitle">
        Адреса
      </div>
      <div className="doctor-card__address">
        м. Київ, вул. Михайла Максимовича (Трутенка), 3, Голосіївський район
      </div>
    </div>
  </div>
);

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};

export default DoctorCard;
