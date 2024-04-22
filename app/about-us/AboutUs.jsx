import React from "react";
import historia from "../../public/images/1540-historia-001 2.png";
import "./AboutUs.css"
import Image from "next/image";


const AboutUs = () => {
  return (
    <div>
      <div className="header-box text-base ">
        <h1 className="box-header-text">HISTORISKA KOMMITTéN</h1>
        <p className="box-text">
        KSSS har sedan 2,5 år tillbaka bildat en Historisk Kommitté (HK) med uppgiften att kartlägga det vi har, till exempel böcker, foton, filmer, priser, troféer, modeller, osv.
        </p>
      </div>

      <section className="section-about">
        <p>
        KSSS (Kungliga Svenska Segelsällskapet) är en av världens äldsta och största segelklubbar. Den grundades 1830 och har för närvarande nära 6 000 medlemmar, varav cirka 2 500 är yngre än 20 år. KSSS har också en mycket bred verksamhetsbas kring segelsporten; från ungdomsläger, träningskurser, regattor (från mindre lokala tävlingar till världens största internationella havskappsegling "Gotland Runt"), till olympiska ambitioner (till exempel 2 silver i Tokyo, 2021).
        </p> 
      </section>
 <Image src={historia} alt="KSSS historia" className="ksss-historia" />
      <section className="section-about">
        <p>
        Vi arkiverar det mesta av materialet i ett digitalt arkiv på Google Drive där vi organiserar samlingen enligt en tidslinje från början av 1830-talet. För att kunna fördela arbetet är det uppdelat i huvudgrupper enligt KSSS aktiviteter med en ansvarig person för varje huvudgrupp. Detta arbete kommer att fortsätta så länge klubben existerar, men naturligtvis mycket intensivt just nu då vi har de första 200 åren av historia att samla in och dokumentera.
        </p>
      </section>

      <section className="section-about">
      KSSS har sedan 2,5 år tillbaka bildat en Historisk Kommitté (HK) med uppgiften att kartlägga det vi har, till exempel böcker, foton, filmer, priser, troféer, modeller, osv. Arbetet har påbörjats och vi skapar rutiner för hur hela processen med insamling och arkivering ska utföras.
      </section>

     

      
    </div>
  );
};

export default AboutUs;
