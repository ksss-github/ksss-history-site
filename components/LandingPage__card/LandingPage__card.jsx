import React from 'react';
import './LandingPage__card.css';
import BtnLight from '../Button/BtnLight';

const LandingPage__card = ({ events }) => {
  return (
    <div className="event__container">
      <section className="event__section">
        <h3 className="event__h3">Milstolpar i vår historia</h3>
        <div className="event__card__container">
          {events.map((event, index) => (
            <div key={index} className={`event__card background-${index + 1}`}>
              <div className="event__content">
                <h3 className="event__year">{event.Year}</h3>
                <p className="event__description">{event.description}</p>
                <BtnLight>LÄS MER</BtnLight>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage__card;
