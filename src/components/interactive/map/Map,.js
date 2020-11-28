import React from 'react';
import './Map.scss';
import mapIcon from '../../../icons/map/map.svg';

const Map = () => (
  <div className="map">
    <div className="map__container">
      <img
        alt="map-icon"
        src={mapIcon}
        className="map__icon"
      />
      <button
        type="button"
        className="map__button"
      >
        Клініка на мапі
      </button>
    </div>
  </div>
);

export default Map;
