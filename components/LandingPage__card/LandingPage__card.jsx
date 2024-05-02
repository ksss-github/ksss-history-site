"use client"
import React from 'react';
import './LandingPage__card.css';
import {BtnLight} from '../button/BtnLight.jsx';
import Link from 'next/link';

const LandingPage__card = ({ timeline }) => {
  
  const filteredEvents = timeline.filter((event) => event.tagIds.some(tag => tag.includes("main"))).sort((a, b) => a.date > b.date ? 1 : -1);

  console.log(filteredEvents, "filteredEvents")

  return (
    <section className="event__container">
      
        <h3 className="event__h3">Milstolpar i vår historia</h3>
        <div className="event__card__container">
          {filteredEvents.map((event, index) => (
            <div key={index} className={`event__card`} style={{backgroundImage: `url(${event.image.url})`, backgroundSize: "cover"}}>
              <div className="event__content">
                <h3 className="event__year">{event.date.slice(0,4)}</h3>
                <p className="event__description">{event.title}</p>
                <Link href={`/timeline/${event.slug}`} className='landingpage-btn-light'>LÄS MER</Link>
              </div>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default LandingPage__card;
