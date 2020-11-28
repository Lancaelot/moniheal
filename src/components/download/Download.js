import React from 'react';
import './Download.scss';
import phone from '../../images/download/phone.svg';
import appstoreIcon from '../../icons/download/appstore.svg';
import googlePayIcon from '../../icons/download/googleplay.svg';

const Download = () => (
  <section className="download">
    <div className="download__container">
      <div className="download__left">
        <img
          alt="phone"
          src={phone}
          className="download__phone"
        />
      </div>
      <div className="download__right">
        <div className="download__text">
          Завантажуйте наш мобільний додаток
        </div>
        <div className="download__services">
          <img
            alt="appstore"
            src={appstoreIcon}
            className="download__appstore"
          />
          <img
            alt="googlepay"
            src={googlePayIcon}
            className="download__googlepay"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Download;
