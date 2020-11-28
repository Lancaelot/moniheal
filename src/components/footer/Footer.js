import React from 'react';
import './Footer.scss';
import phoneIcon from '../../icons/footer/phone.svg';
import emailIcon from '../../icons/footer/email.svg';
import logoIcon from '../../icons/footer/logo.svg';
import visaIcon from '../../icons/footer/visa.svg';
import masterIcon from '../../icons/footer/masterCard.svg';
import facebookIcon from '../../icons/footer/facebook.svg';
import instagramIcon from '../../icons/footer/instagram.svg';
/* eslint-disable */

const Footer = () => (
  <footer className="footer">
    <div className="footer__body">
      <div className="footer__about">
        <h4 className="footer__title">
          Про компанію
        </h4>
        <div className="footer__text">
          MoniHeal - це унікальна система, яка дає людині чітку
          і достовірну уяву про стан свого здоров&apos;я та має на
          меті попередити користувача про можливі ускладнення.
        </div>
        <div className="footer__email">
          <img
            alt="email"
            align="phoneIcon"
            src={emailIcon}
            className="footer__email--icon" />
          <div className="footer__address">
            helpmoniheal@gmail.com
          </div>
        </div>
        <div className="footer__phone">
          <img
            alt="phoneIcon"
            src={phoneIcon}
            className="footer__phone--icon"
          />
          <div className="footer__address">
            +38 (097) 773 - 73 -73
          </div>
        </div>
      </div>
      <div className="footer__sections">
        <h4 className="footer__title">
          Розділи
        </h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">Про нас</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Користувачам</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Лікарям</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Клінікам</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Новини</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Знайти фахівця</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Клініки</a>
          </li>
        </ul>
      </div>
      <div className="footer__resources">
        <h4 className="footer__title">
          Ресурси
        </h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">Захист даних</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Політика приватності</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Правила користування</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Довідковий центр</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Зворотній звязок</a>
          </li>
        </ul>
      </div>
      <div className="footer__social">
        <h4 className="footer__title">
          Ми в соцмережах
        </h4>
        <div className="footer__text">
          Підписуйтесь на наші соцмережі!&nbsp
          Будьте в курсі останніх новин, акцій, заходів.
        </div>
        <img
          alt="facebook"
          src={facebookIcon}
          className="footer__facebook"
        />
        <img
          alt="instagram"
          src={instagramIcon}
          className="footer__instagram"
        />
      </div>
    </div>
    <div className="footer__bottom">
      <img
        alt="logo"
        src={logoIcon}
        className="footer__logo"
      />
      <div className="footer__payments">
        <img
          alt="master-card"
          src={masterIcon}
          className="footer__mastercard"
        />
        <img
          alt="visa"
          src={visaIcon}
          className="footer__visa"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
