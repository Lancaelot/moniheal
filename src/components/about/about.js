import React from 'react';
/* eslint-disable */
import PropTypes from 'prop-types';
import './about.scss';
import Shedule from './shedule/shedule';

const About = props => {
  return (
    <section className="about">
      <div className="about__body">
        <h2 className="about__title">
          Про клініку
        </h2>
        <div className="about__text">
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
          </span >
          <button
            className="button-more about__button-more"
          >
            Читати повністю
          </button>
        </div>
      </div>
      <Shedule />
    </section>
  );
};

About.propTypes = {

};

export default About;