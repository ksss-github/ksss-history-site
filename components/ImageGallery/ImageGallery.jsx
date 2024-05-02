"use client";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "./imageGallery.css"

export default function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(() => {
    if (images && images.length > 0) {
      return images[0];
    }
  });

  return images && (
    <section className="flex flex-col gap-4">
      <div className="h-[20rem] flex flex-col justify-center items-center">
        <img src={currentImage.url} alt={currentImage.alt} className="h-full rounded-lg object-cover " />
        <div>{currentImage.caption}</div>
      </div>
      <div className="flex items-center gap-2 justify-center overflow-x-auto">
        <div className="text-2xl text-[var(--mainblue)]"><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="h-25 slider flex items-center overflow-x-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${images.length}, 50px)`,
            }}
            className={`gap-8 overflow-x-auto slider snap-x px-4 py-4 flex-1 `}
          >
            {images.map((item) => (
              <div className="h-[70px] w-[70px] shadow-md shadow-gray-400 snap-start rounded-lg flex items-center bg-[var(--mainblue)]" key={crypto.randomUUID()}>
              <Image
                src={item.url}
                alt={item.alt || "image"}
                width={100}
                height={100}
                onClick={() => setCurrentImage(item)}
                className="cursor-pointer shadow-md  bg-[var(--mainblue)] object-contain h-full w-full rounded-lg"
              />
            </div>
            ))}
          </div>
        </div>

        <div className="text-2xl text-[var(--mainblue)]"><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </section>
  );
}
