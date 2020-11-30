import React, { useState } from 'react';
import './App.scss';
import Interactive from './components/interactive/Interactive';
import Header from './components/header/Header';
import About from './components/about/About';
import Specialists from './components/specialists/Specialists';
import Services from './components/services/Services';
import Doctors from './components/doctors/Doctors';
import Reviews from './components/reviews/Reviews';
import News from './components/news/News';
import Download from './components/download/Download';
import { useWindowSize } from './hooks/hook';
import Footer from './components/footer/Footer';
import { Map } from './components/modal/Map';
import Gallery from './components/modal/Gallery';

export const App = () => {
  const currSize = useWindowSize();
  const [isMapBackdrop, setIsMapBackdrop] = useState(false);
  const [isGalleryBackdrop, setIsGalleryBackdrop] = useState(false);

  const handleMapBackdrop = () => {
    setIsMapBackdrop(!isMapBackdrop);
  };

  const handleGalleryBackdrop = () => {
    setIsGalleryBackdrop(!isGalleryBackdrop);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
      </div>
      {isMapBackdrop && <Map handleBackdrop={handleMapBackdrop} />}
      {isGalleryBackdrop && <Gallery />}
      <div className="page" />
      <div className="wrapper">
        <Interactive
          handleMapBackdrop={handleMapBackdrop}
          handleGalleryBackdrop={handleGalleryBackdrop}
        />
      </div>
      <div className="wrapper">
        <About currSize={currSize} />
      </div>
      <div className="wrapper">
        <Specialists currSize={currSize} />
      </div>
      <div className="wrapper">
        <Services currSize={currSize} />
      </div>
      <div className="wrapper">
        <Doctors currSize={currSize} />
      </div>
      <div className="wrapper">
        <Reviews currSize={currSize} />
      </div>
      <div className="wrapper">
        <News currSize={currSize} />
      </div>
      <Download />
      <Footer />
    </div>
  );
};
