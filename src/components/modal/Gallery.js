import React from 'react';
import './Gallery.scss';
import image1 from '../../images/gallery/1.png';
import image2 from '../../images/gallery/2.png';
import image3 from '../../images/gallery/3.png';
import image4 from '../../images/gallery/4.png';
import image5 from '../../images/gallery/5.png';

const Gallery = () => (
  <div className="backdrop">
    <div className="gallery">
      <div className="gallery__current-image">
        <button
          type="button"
          className="button-forward gallery__button-forward"
        />
        <button
          type="button"
          className="button-backward gallery__button-backward"
        />
      </div>
      <ul className="gallery__list">
        <button
          type="button"
          className="button-forward gallery__button-forward--small"
        />
        <button
          type="button"
          className="button-backward
          gallery__button-backward--small"
        />
        <li className="gallery__item">
          <img
            alt="room"
            className="gallery__image"
            src={image1}
          />
        </li>
        <li className="gallery__item">
          <img
            alt="cloud"
            className="gallery__image"
            src={image2}
          />
        </li>
        <li className="gallery__item">
          <img
            alt="phone-piano"
            className="gallery__image"
            src={image3}
          />
        </li>
        <li className="gallery__item">
          <img
            alt="leaf"
            className="gallery__image"
            src={image4}
          />
        </li>
        <li className="gallery__item">
          <img
            alt="coffe"
            className="gallery__image"
            src={image5}
          />
        </li>
      </ul>
    </div>
  </div>
);

export default Gallery;
