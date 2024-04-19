import { getFullEvent } from "../../../sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
export const fetchCache = 'force-no-store';


export default async function currentEvent({ params }) {
  const slug = params.selectedEvent;
  const currentEvent = await getFullEvent(slug);

  return (
    <article className="bg-[#fffbf3] max-w-[60rem] mx-auto flex flex-col gap-4">
      <section className="bg-[#f2f2f2]">
        <h1 className="text-[1.2rem] font-bold">{currentEvent.title}</h1>
        <p>{currentEvent.date}</p>
        <p>{currentEvent.location}</p>
      </section>
        
        <section className="p-4">
          <PortableText value={currentEvent.content} />
        </section>

      <div className="grid grid-cols-3">
        {currentEvent.gallery &&
          currentEvent.gallery.map((item) => {
            return (
              <Image key={crypto.randomUUID()} src={item.url} alt={item.alt || "image"} width={200} height={200} />
            );
          })}
      </div>

      <section className="flex flex-col gap-4">
        <h2>Related links</h2>
        <div>

        {currentEvent.relatedLinks &&
          currentEvent.relatedLinks.map((link) => {
            return <div key={crypto.randomUUID()}>{link}</div>;
          })}
          </div>
      </section>
    </article>
  );
}


