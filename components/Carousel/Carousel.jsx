"use client";
import "./Carousel.css";
import "../../app/globals.css";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInputChange = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const imageInfo = [
    {
      title: "UTFORSKA HISTORIAN OM KSSS",
      description:
        "Dyk ner i de fängslande krönikorna från vår segelklubbs resa över vägarna. Interagera med tidslinjen för att börja utforska!",
      buttonContent: "UTFORSKA TIDSLINJEN",
      url: "/timeline",
    },
    {
      title: "TILLGÅNG TILL ALLA ÅRSBÖCKER",
      description:
        "KSSS grundades i Stockholm 1830 under namnet Svenska Segel Sällskapet",
      buttonContent: "ÅRSBÖCKER",
      url: "yearbooks",
    },
    {
      title: "DET FÖRSTA GOTLAND RUNT",
      description:
        "1937 gick första Gotland Runt av stapeln. Då gick tävlingen motsols med start och målgång utanför Visby.",
      buttonContent: "GOTLAND RUNT",
      url: "#"
    },
    {
      title: "JUNIORVERKSAMHET",
      description:
        "Under sommaren deltar ca 750 barn på KSSS läger på fem olika anläggningar.",
      buttonContent: "JUNIORS",
      url: "#"
    },
  ];

  const imageUrls = ["/AFOR-2594.jpg", "/2013.jpg", "/Race.jpg", "/Opti.jpg"];

  return (
    <div className="carousel__container">
      <div className="carousel">
        {imageUrls.map((url, index) => (
          <input
            key={index}
            type="radio"
            id={`carousel-${index + 1}`}
            name="carousel[]"
            checked={index === activeIndex}
            onChange={() => handleInputChange(index)}
          />
        ))}
        <ul className="carousel__items">
          {imageUrls.map((url, index) => (
            <li
              key={index}
              className={`carousel__item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <Image
                src={url}
                alt={`Carousel Image ${index + 1}`}
                width={300}
                height={200}
                layout="responsive"
              />

              <div className="carousel__text-overlay">
                <h3 className="overlay-title">{imageInfo[index].title}</h3>
                <p className="overlay-text">{imageInfo[index].description}</p>
                <a href={imageInfo[index].url} className="custom-button">
                  {imageInfo[index].buttonContent}
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="carousel__prev" onClick={handlePrev}>
          <FaAngleLeft size={40} color="white" />
        </div>
        <div className="carousel__next" onClick={handleNext}>
          <FaAngleRight size={40} color="white" />
        </div>
        <div className="carousel__nav">
          {imageUrls.map((_, index) => (
            <label key={index} htmlFor={`carousel-${index + 1}`}></label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
