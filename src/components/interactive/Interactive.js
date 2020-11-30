import React from 'react';
import PropTypes from 'prop-types';
import './Interactive.scss';
import MainInfo from './mainInfo/MainInfo';
import GalleryInfo from './gallery-info/GalleryInfo';
import MapInfo from './map-info/MapInfo';

const Interactive = ({ handleMapBackdrop, handleGalleryBackdrop }) => (
  <section className="interactive">
    <MainInfo />
    <div className="interactive__right">
      <GalleryInfo handleBackdrop={handleGalleryBackdrop} />
      <MapInfo handleBackdrop={handleMapBackdrop} />
    </div>
  </section>
);

Interactive.propTypes = {
  handleMapBackdrop: PropTypes.func.isRequired,
  handleGalleryBackdrop: PropTypes.func.isRequired,
};

export default Interactive;
