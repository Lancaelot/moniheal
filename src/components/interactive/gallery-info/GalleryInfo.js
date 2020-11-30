import React from 'react';
import PropTypes from 'prop-types';
import './GaleryInfo.scss';
import galleryIcon from '../../../icons/gallery/gallery.svg';

const GalleryInfo = ({ handleBackdrop }) => (
  <div className="gallery-info">
    <div className="gallery-info__container">
      <img
        alt="gallery-info-icon"
        src={galleryIcon}
        className="gallery-info__icon"
      />
      <button
        onClick={() => handleBackdrop()}
        type="button"
        className="gallery-info__button"
      >
        Переглянути 12 Фото
      </button>
    </div>
  </div>
);

GalleryInfo.propTypes = {
  handleBackdrop: PropTypes.func.isRequired,
};

export default GalleryInfo;
