"use client";
import rectangle from "../../public/images/Rectangle 71.png";
import Image from "next/image";
import BtnLight from "../../components/button/BtnLight";
import "./landingPage.css";
import Carousel from "../../components/Carousel/Carousel";
export default async function LandingPage() {
  return (
    <>
      <Carousel />
      <div>
        <section className="achievement">
          <div>
            <p className="achievement-number">200+</p>
            <p className="achievement-text">år av historia</p>
          </div>
          <div>
            <p className="achievement-number">60+</p>
            <p className="achievement-text">årsbocker</p>
          </div>
          <div>
            <p className="achievement-number">50+</p>
            <p className="achievement-text"> medaljer</p>
          </div>
        </section>

        <section>
          <Image
            src={rectangle}
            alt="KSSS historia"
            className="ksss-historia"
          />
          <div className="updates">
            <h2 className="updates-header">Från startskott till idag</h2>
            <p className="updates-text">
              Utforska KSSS historia, från dess grundande 1830, och upptäck en
              rik värld av seglingskultur och framstående prestationer. Det
              finns mycket att hitta!
            </p>
          </div>
        </section>

        <section className="event-section">
          <h3 className="event-header">Milstolpar i vår historia</h3>
          <div className="event-card">
            <h3>1905</h3>
            <p>Svenska Seglarförbundet bildas </p>
          </div>
        </section>

        <section className="omoss-box">
          <h6 className="omoss-header">träffa historiska kommitteen</h6>
          <p className="omoss-text">
            Träffa personerna som arbetar på att bevara KSSS historia
          </p>
          <BtnLight>OM OSS</BtnLight>
        </section>
      </div>
    </>
  );
}
