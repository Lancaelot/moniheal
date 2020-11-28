import React from 'react';
import './Interactive.scss';
import MainInfo from './mainInfo/MainInfo';
import Gallery from './gallery/Gallery';
import Map from './map/Map,';

const Interactive = () => (
  <section className="interactive">
    <MainInfo />
    <div className="interactive__right">
      <Gallery />
      <Map />
    </div>
  </section>
);

export default Interactive;
