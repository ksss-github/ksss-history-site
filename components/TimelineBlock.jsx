import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TimelineBlock({ _id, slug, image, title, location, date, description}) {

  return (
    <Link href={`/timeline/${slug}`} key={_id} className="bg-[#dae5ff] w-full border border-solid border-black">
        {image && image.url !== null && (
          <div className="w-full">
            <Image
              src={image.url}
              alt={image.alt || "image"}
              width={200}
              height={200}
            />
          </div>
        )}
        <div>{date}</div>
        <h2 className="font-bold text-[1.5rem]">{title}</h2>
        <div>{location}</div>
        <div>{description}</div>
      </Link>
  )
}
