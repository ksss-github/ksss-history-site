import "./Carousel.css";
import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInputChange = (index) => {
    setActiveIndex(index);
  };

  const imageInfo = [
    {
      title: "UTFORSKA HISTORIAN OM KSSS",
      description:
        " Dyk ner i de fängslande krönikorna från vår segelklubbs resa över vägorna. Interagera med tidslinjen för att börja utforska! ",
    },
    {
      title: "TILLGÅNG TILL ALLA ÅRSBÖCKER",
      description:
        "KSSS grundades i Stockholm 1830 under namnet Svenska Segel Sällskapet",
    },
    {
      title: "DET FÖRSTA GOTLAND RUNT",
      description:
        "1937 gick första Gotland Runt av stapeln. Då gicjk tävligen motsols med start och målgång utanför Visby.",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
  ];

  const imageUrls = [
    "/AFOR-2594.jpg",
    "/ActionBild.jpg",
    "/Race.jpg",
    "/R-102.jpg",
  ];

  return (
    <div className="container">
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
            <li key={index} className="carousel__item">
              <Image
                src={url}
                alt={`Carousel Image ${index + 1}`}
                width={300}
                height={200}
                layout="responsive"
              />
              <div className="text-overlay">
                <h3>{imageInfo[index].title}</h3>
                <p>{imageInfo[index].description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="carousel__prev">
          {imageUrls.map((_, index) => (
            <label key={index} htmlFor={`carousel-${index + 1}`}>
              {index + 1}
            </label>
          ))}
        </div>
        <div className="carousel__next">
          {imageUrls.map((_, index) => (
            <label key={index} htmlFor={`carousel-${index + 1}`}>
              {index + 1}
            </label>
          ))}
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
