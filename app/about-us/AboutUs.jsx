import React from "react";
import kssFlag from "../../public/images/1540-ksss-001.jpg";
import "./AboutUs.css"


const AboutUs = () => {
  return (
    <div>
      <div className="header-box text-base bg-gray-200 mt-2 p-3 ">
        <h1 className="font-extrabold mb-0 text-xl prose lg:prose-xl text-center">The Historical Committee</h1>
        <p className="text-xs text-center leading-4 px-5">
          KSSS has since 2.5 years back formed a Historical Committee (HC) with
          the task of mapping what we have, for example books, photos, films,
          prizes, trophies, models, etc.
        </p>
      </div>

      <section className="prose-sm mt-4 p-4 leading-6 tracking-tight sm:text-4xl">
        <p>
          KSSS (The Royal Yacht Club) is one of the oldest and largest yacht
          clubs in the world. It was founded in 1830 and currently has close to
          6,000 members, out of which about 2,500 are younger than 20 years old.
          KSSS also has a very broad base of activities around the sport of
          sailing; from youth camps, training classes, regattas (from smaller
          local races to the world's largest international offshore race "Gotland
          Runt"), to Olympic ambitions (e.g., 2 silver in Tokyo, 2021).
        </p> 
        <img src={kssFlag} width={200} height={200} alt="KSSS Photo" />
      </section>

      <section className="prose-sm p-4">
        <p>
        We archive most of the material in a digital
        archive on Google Drive where we organize
        the collection according to a timeline from
        the beginning of 1830. To be able to
        distribute the work, it is divided into main
        groups according to KSSS activities with a
        person responsible for each main group.
        This work will continue as long as the Club exists but of course very intensive right now as we have the first 200 years of history to collect and document.
        </p>
      </section>

      <section className="prose-sm mt-2 p-4">
      KSSS has since 2.5 years back formed a Historical Committee(HC) with the task of mapping what we have, for example, books, photos, films, prizes, trophies, models, etc. That work has begun and we are creating routines for how the entire process of collection and archiving should be done.
      </section>

     

      
    </div>
  );
};

export default AboutUs;
