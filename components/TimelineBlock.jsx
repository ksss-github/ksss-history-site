import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function TimelineBlock({ _id, slug, image, title, date, description}) {
  const year = date.slice(0, 4)

  return (
    <Link href={`/timeline/${slug}`} key={_id} className="bg-[#fdfbf9] w-full border border-solid rounded-md shadow-md shadow-gray-400 max-w-[60rem]">
        {image && image.url !== null && (
          <div className="w-full shadow-md shadow-gray-400">
            <Image
              src={image.url}
              alt={image.alt || "image"}
              width={200}
              height={200}
              className='object-cover w-full h-40'
            />
          </div>
        )}
        <div className='px-6 py-3'>
        <div className='text-[var(--mainblue)] font-bold text-xl'>{year}</div>
        <h2 className=" text-[1rem] text-[var(--mainblue)] font-bold">{title.toUpperCase()}</h2>
        <div className='font-baskervville text-sm mb-4'>{description}</div>
        <button className='px-8 py-3 rounded-2xl border-2 border-[#0b5883] bg-[var(--lightblue)] text-white text-xs font-bold shadow-md shadow-gray-400'>LÄS MER</button>
        </div>
      </Link>
  )
}
