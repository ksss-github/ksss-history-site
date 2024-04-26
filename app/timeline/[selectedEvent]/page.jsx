import { getFullEvent } from "../../../sanity/sanity-utils";
import { PortableText } from "next-sanity";
import React from "react";
import ImageGallery from "../../../components/ImageGallery/ImageGallery";
export const fetchCache = "force-no-store";

export default async function currentEvent({ params }) {
  const slug = params.selectedEvent;
  const currentEvent = await getFullEvent(slug);
  const year = currentEvent.date.slice(0, 4);

  return (
    <article className=" max-w-[60rem] mx-auto flex flex-col gap-4 p-4">
      <ImageGallery images={currentEvent.gallery} />

      <section className="border-t border-[#bcbcbc] py-2 px-2 flex flex-col gap-4">
        <div className="text-center">
        <h1 className="text-[1.2rem] font-bold">{currentEvent.title.toUpperCase()}</h1>
        <p>{currentEvent.location}</p>
        </div>
      <div className="flex flex-col gap-4 text-[var(--mainblue)]">
        <p className="text-xl font-bold">{year}</p>
        <div className="font-baskervville"><PortableText value={currentEvent.content} /></div>
      </div>
      </section>


      <section className="flex flex-col gap-4 px-2">
        <h2 className="text-[1rem] font-bold">LÄS MER</h2>
        <div className="flex flex-wrap gap-2">
          {currentEvent.relatedLinks &&
            currentEvent.relatedLinks.map((link) => {
              console.log(link)
              return <a href={`${link}`} target="_blank" key={crypto.randomUUID()} className='px-4 py-2 rounded-2xl border-2 border-[#0b5883] bg-[var(--lightblue)] text-white text-xs font-bold shadow-md shadow-gray-400 self-start'>{link}</a>;
            })}
        </div>
      </section>
    </article>
  );
}

