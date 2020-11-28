import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './About.scss';
import Schedule from './schedule/Schedule';

const About = ({ currSize }) => {
  const [isMore, setIsMore] = useState(false);
  // eslint-disable-next-line global-require
  const classNames = require('classnames');
  const aboutTextClass = classNames(
    'about__text',
    { truncate: !isMore },
    { truncate__small: currSize.width < 1000 && isMore },
  );

  return (
    <section className="about">
      <div className="about__body">
        <h2 className="about__title">
          Про клініку
        </h2>
        <div className={aboutTextClass}>
          <span className="about__span">
            Основна спеціалізація клініки Flexis це лікування
            і реабілітація пацієнтів з ревматологічними, неврологічними
            і травматологічними ушкодженнями опорно-рухового апарату.
          </span>
          <span className="about__span">
            Ми створили велику і ультрасучасну апаратну базу, яка дозволяє
            проводити комп&apos;ютерне витягування, імпульсно- хвильову терапію,
            застосовувати для лікування лазерні технології лікування,
            миостимуляцию, магніторезонансну терапію, внутрішньосуглобові
            ін&apos;єкції, алопатичну терапію.
          </span>
          <span className="about__span">
            Сучасні технології в комплексі з апаратурою і лікарським
            професіоналізмом дозволяють повернути людині колишню
            активність і інтерес до діяльності в тих життєвих сферах,
            які здавалися вже безповоротно втраченими.
          </span>
          <span className="about__span">
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.Aliquid, blanditiis dicta enim excepturi facilis
            ipsa iste iure labore laboriosam magnam maiores mollitia
            nisi non possimus quaerat quam quis quo voluptates?
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.Aliquid, blanditiis dicta enim excepturi facilis
            ipsa iste iure labore laboriosam magnam maiores mollitia
            nisi non possimus quaerat quam quis quo voluptates?
          </span>
        </div>
        <button
          type="button"
          className="button-more about__button-more"
          onClick={() => setIsMore(!isMore)}
        >
          {!isMore ? 'Читати повністю' : 'Приховати деталі'}
        </button>
      </div>
      <Schedule />
    </section>
  );
};

About.propTypes = {
  currSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

About.defaultProps = {
  currSize: PropTypes.shape({
    width: 0,
    height: 0,
  }),
};

export default About;
