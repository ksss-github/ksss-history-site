import React from "react";
import kssFlag from "../../public/1540-ksss-001.jpg";
import "./AboutUs.css"


const AboutUs = () => {
  return (
    <div>
      <div className="header-box text-base bg-gray-200">
        <h1 className="font-extrabold mb-0 text-xl">The Historical Committee</h1>
        <p className="text-sm">
          KSSS has since 2.5 years back formed a Historical Committee (HC) with
          the task of mapping what we have, for example books, photos, films,
          prizes, trophies, models, etc.
        </p>
      </div>

      <section className="">
        <p>
          KSSS (The Royal Yacht Club) is one of the oldest and largest yacht
          clubs in the world. It was founded in 1830 and currently has close to
          6,000 members, out of which about 2,500 are younger than 20 years old.
          KSSS also has a very broad base of activities around the sport of
          sailing; from youth camps, training classes, regattas (from smaller
          local races to the world's largest international offshore race "Gotland
          Runt"), to Olympic ambitions (e.g., 2 silver in Tokyo, 2021).
        </p> 
        <img src={kssFlag} alt="KSSS Photo" />
      </section>

     

      
    </div>
  );
};

export default AboutUs;
