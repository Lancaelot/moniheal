import React from 'react';
import PropTypes from 'prop-types';
import './MapInfo.scss';
import mapIcon from '../../../icons/map/map.svg';

const MapInfo = ({ handleBackdrop }) => (
  <div className="map" id="#map">
    <div className="map__container">
      <img
        alt="map-icon"
        src={mapIcon}
        className="map__icon"
      />
      <button
        onClick={() => handleBackdrop()}
        type="button"
        className="map__button"
      >
        Клініка на мапі
      </button>
    </div>
  </div>
);

MapInfo.propTypes = {
  handleBackdrop: PropTypes.func.isRequired,
};

export default MapInfo;
