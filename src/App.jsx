/* eslint-disable */
import React from 'react';
import './App.scss';
import { Switch, Link, Route } from 'react-router-dom';
import Interactive from './components/interactive/interactive';
import Header from './components/header/header';
import About from './components/about/about';
import Specialists from "./components/specialists/specialists";
import time from '../src/icons/service/time.svg';
import pay from '../src/icons/service/pay.svg';
import Services from "./components/services/Services";
import Doctors from "./components/doctors/Doctors";
import Reviews from "./components/reviews/Reviews";
import News from "./components/news/News";

export const App = () => (
  <div>
    <div className="wrapper">
      <Header />
      <div className="page"></div>
      <Interactive />
      <About />
      <Specialists />
      <Services />
      <Doctors />
      <Reviews />
      <News />
    </div>
  </div>
);
