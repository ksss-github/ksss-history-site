"use client"
import React from "react"
import { BtnLight } from "../button/BtnLight"
import "./landingPage.css"
import LandingPage__card from "../LandingPage__card/LandingPage__card"
import Carousel from "../Carousel/Carousel"
import Link from "next/link" // Import Link from 'next/link'

export default function LandingPage({ timeline }) {
  const filteredEvents = timeline
    .filter((event) => event.tagIds.some((tag) => tag.includes("main")))
    .sort((a, b) => (a.date > b.date ? 1 : -1))

  return (
    <div>
      <section>
        <Carousel />
      </section>

      <section className="landing__page">
        <div>
          <p className="landingpage__number">200+</p>
          <p className="landingpage__p">år av historia</p>
        </div>
        <div>
          <p className="landingpage__number">60+</p>
          <p className="landingpage__p">årsbocker</p>
        </div>
        <div>
          <p className="landingpage__number">50+</p>
          <p className="landingpage__p">medaljer</p>
        </div>
      </section>

      <section className="landingpage__section">
        <div className="landingpage__content">
          <div className="landingpage-banner-image"></div>

          <div className="landingpage__updates">
            <h2 className="landingpage__h2">Från startskott till idag</h2>
            <p className="landingpage__p">
              Utforska KSSS historia från dess grundande 1830, och upptäck en
              rik värld av seglingskultur och framstående prestationer. Det
              finns mycket att hitta!
            </p>
          </div>
        </div>
      </section>

      <section className="landingpage__historia__container">
        <div className="landingpage__historia">
          <LandingPage__card timeline={timeline} />
        </div>
      </section>

      <section className="landingpage__omoss">
        <h2 className="landingpage__omoss__h2">träffa historiska kommitteen</h2>
        <p className="landingpage__omoss__p">
          Träffa personerna som arbetar på att bevara KSSS historia
        </p>

        <Link href="/about-us">
          <BtnLight>OM OSS</BtnLight>
        </Link>
      </section>
    </div>
  )
}
