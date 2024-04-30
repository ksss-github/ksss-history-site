"use client";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "./imageGallery.css"

/**
 * ImageGallery component for displaying a gallery of images.
 * @param {Object} props - The props object.
 * @param {Array} props.images - The list of images.
 */
export default function ImageGallery({ images }) {
  /**
   * State to track the current image.
   * @type {Object}
   */
  const [currentImage, setCurrentImage] = useState(() => {
    if (images && images.length > 0) {
      return images[0];
    }
  });

  return images && (
    <section className="flex flex-col gap-4">
      <div className="h-[20rem] flex justify-center">
        <img src={currentImage.url} alt={currentImage.alt} className="h-full" />
      </div>
      <div className="flex items-center gap-2 justify-center overflow-x-auto">
        <div className="text-2xl text-[var(--mainblue)]"><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="h-40 slider flex items-center overflow-x-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${images.length}, 50px)`,
            }}
            className={`gap-4 overflow-x-auto slider snap-x px-2 py-4 flex-1 `}
          >
            {images.map((item) => (
              <Image
                key={crypto.randomUUID()}
                src={item.url}
                alt={item.alt || "image"}
                width={100}
                height={100}
                onClick={() => setCurrentImage(item)}
                className="cursor-pointer shadow-md shadow-gray-400 snap-start bg-white rounded-lg object-cover w-full"
              />
            ))}
          </div>
        </div>

        <div className="text-2xl text-[var(--mainblue)]"><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </section>
  );
}
