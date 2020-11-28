import React from 'react';
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

export const App = () => {
  const currSize = useWindowSize();

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
      </div>
      <div className="page" />
      <div className="wrapper">
        <Interactive />
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
