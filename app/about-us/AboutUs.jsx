// AboutUs.jsx

import React from "react";
import historia from "../../public/images/1540-historia-001 2.png";
import "./AboutUs.css";
import Image from "next/image";
import CommitteeCard from "./CommitteeCard";

const AboutUs = () => {
  
  const committeeMembers = [
    {
      name: "...",
      position: "...",
    },
    {
      name: "...",
      position: "...",
    },
    {
      name: "...",
      position: "...",
    },
    {
      name: "...",
      position: "...",
    },
  ];

  return (
    <div>
      <div className="aboutus__header__box">
        <h1 className="aboutus__h1">HISTORISKA KOMMITTéN</h1>
        <p className="aboutus__p">
          KSSS has since 2.5 years back formed a Historical Committee (HC) with
          the task of mapping what we have, for example books, photos, films,
          prizes, trophies, models, etc.
        </p>
      </div>

      <section className="aboutus__section">
        <p className="aboutus__section__p">
          KSSS (Kungliga Svenska Segelsällskapet) är en av världens äldsta och
          största segelklubbar. Den grundades 1830 och har för närvarande nära
          6 000 medlemmar, varav cirka 2 500 är yngre än 20 år. KSSS har också
          en mycket bred verksamhetsbas kring segelsporten; från ungdomsläger,
          träningskurser, regattor (från mindre lokala tävlingar till
          världens största internationella havskappsegling "Gotland Runt"), till
          olympiska ambitioner (till exempel 2 silver i Tokyo, 2021).
        </p>
      </section>
      <Image src={historia} alt="KSSS historia" className="ksss__historia" />
      <section className="aboutus__section">
        <p className="aboutus__section__p">
          Vi arkiverar det mesta av materialet i ett digitalt arkiv på Google
          Drive där vi organiserar samlingen enligt en tidslinje från början av
          1830-talet. För att kunna fördela arbetet är det uppdelat i
          huvudgrupper enligt KSSS aktiviteter med en ansvarig person för
          varje huvudgrupp. Detta arbete kommer att fortsätta så länge klubben
          existerar, men naturligtvis mycket intensivt just nu då vi har de
          första 200 åren av historia att samla in och dokumentera.
        </p>
      </section>

      <section className="aboutus__section">
        <p className="aboutus__section__p">
          KSSS har sedan 2,5 år tillbaka bildat en Historisk Kommitté (HK) med
          uppgiften att kartlägga det vi har, till exempel böcker, foton,
          filmer, priser, troféer, modeller, osv. Arbetet har påbörjats och vi
          skapar rutiner för hur hela processen med insamling och arkivering
          ska utföras.
        </p>
      </section>

      <section className="kommitte__box">
        <h4 className="aboutus__h4">VÅR KOMMITTÉ</h4>
        
        <div className="committee__profile__container">
          {committeeMembers.map((member, index) => (
            <CommitteeCard
              key={index}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
