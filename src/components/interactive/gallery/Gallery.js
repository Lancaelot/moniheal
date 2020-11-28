import React from 'react';
import './Galery.scss';
import galleryIcon from '../../../icons/gallery/gallery.svg';

const Gallery = () => (
  <div className="gallery">
    <div className="gallery__container">
      <img
        alt="gallery-icon"
        src={galleryIcon}
        className="gallery__icon"
      />
      <button
        type="button"
        className="gallery__button"
      >
        Переглянути 12 Фото
      </button>
    </div>
  </div>
);

export default Gallery;
