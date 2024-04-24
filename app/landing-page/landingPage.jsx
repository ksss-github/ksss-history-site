import React from 'react';
import Image from "next/image";
import BtnLight from "../../components/button/BtnLight";
import "./landingPage.css";
import LandingPage__card from "../../components/LandingPage__card/LandingPage__card";
import rectangle from "../../public/images/Rectangle 71.png";

export default async function LandingPage() {
 
  const events = [
    {
      Year: "1905",
      description: "Svenska Seglarförbundet bildas"
    },
    {
      Year: "2007",
      description: "175-års jubileum"
    },
    {
      Year: "1897",
      description: "Kvinnor får gå med i KSSS"
    }
  ];

  return (
    <div>
      <section className="achievement">
        <div><p className="achievement__number">200+</p>
        <p className="achievement__text">år av historia</p></div>
        <div><p className="achievement__number">60+</p>
        <p className="achievement__text">årsbocker</p></div>
        <div><p className="achievement__number">50+</p>
        <p className="achievement__text"> medaljer</p></div>
      </section>
      
      <section>    
        <Image src={rectangle} alt="KSSS historia" className="ksss__historia" />
        <div className="updates">
        <h2 className="updates__header">Från startskott till idag</h2>
        <p className="updates__text">Utforska KSSS historia, från dess grundande 1830, och upptäck en rik värld av seglingskultur och framstående prestationer. Det finns mycket att hitta!</p>
      </div>
</section>

     <section>
      <div>
        <LandingPage__card events={events} /></div>
      </section>
      
      <section className="omoss__box">
        <h6 className="omoss__header">träffa historiska kommitteen</h6>
        <p className="omoss__text">Träffa personerna som arbetar på att bevara KSSS historia</p>
        <BtnLight>OM OSS</BtnLight>
      </section>
    </div>
  );
}
