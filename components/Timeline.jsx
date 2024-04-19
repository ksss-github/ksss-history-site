"use client"

import React, { useEffect, useRef, useState } from 'react';
import TimelineBlock from './TimelineBlock';

export default function Timeline({timelineData}) {
  const [desiredYear, setDesiredYear] = useState("1990");
  const [category, setCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const filteredTimelineByCategory = timelineData.filter(event => {
    if (category.length === 0) {
      return true;
    }
    return category.includes(event.tags[0]);
  });
  
  const filteredTimelineByDecade = filteredTimelineByCategory.filter(event => event.date.slice(0,4) === desiredYear);

  // Get all the decades for the slider sorted
  let decadesCollection = new Set(filteredTimelineByCategory.map((event) => event.date.slice(0,4)));
  let decades = Array.from(decadesCollection).sort();

  // Get all the categories for the filter
  let categoriesCollection = new Set(timelineData.map((event) => event.tags[0]));
  let categories = Array.from(categoriesCollection).sort();


  categories = categories.map(category => {
    let words = category.replace(/-/g, ' ').split(' ');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return {value: category, label: words.join(' ')};
  });
 

  // handle changes to filter checkboxes
  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter(cat => cat !== value));
    } else {
      setCategory([...category, value]);
    }
  }

  // Create refs for each decade to scroll to
  const refs = decades.reduce((acc, value) => {
    acc[value] = React.createRef();
    return acc;
  }, {});

  // Set default year to the first item in the current category
  useEffect(() => {
    setDesiredYear(decades[0]);
  }, [category])

  console.log(desiredYear, "desiredYear")

  // Scroll to the desired year when it changes
  useEffect(() => {
    if (refs[desiredYear]) { // Check if the ref exists
      refs[desiredYear].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [desiredYear]);


  return (
    <div>
    <div className=" bg-red-200 flex flex-col">
      <div className='relative'>
        <button onClick={() => setShowFilter(c => !c)}>Filter</button>
        <div className={`absolute top-full z-20 left-0 bg-blue-300 ${showFilter ? "flex flex-col" : "hidden"}`}>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <input type='checkbox' value={category.value} onChange={(e) => handleFilterChange(e)} />
                <label>{category.label}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative py-5 bg-red-400 overflow-x-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${decades.length}, auto)`,
            padding: "0 50%"
          }}
          className="gap-10 absolute top-0 left-0 right-0 overflow-x-auto"
          >
          {decades.map((year, index) => (
            <li key={index} id={year} className="text-center list-none cursor-pointer" ref={refs[year]} onClick={() => setDesiredYear(year)}>
              <span>{year}</span>
            </li>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 h-4'>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-400'></div>
      </div>
      <div className='flex justify-center gap-2 py-2'>
      <button className='px-4 py-1 bg-gray-300' onClick={() => {
        const currentIndex = decades.indexOf(desiredYear);
        if (currentIndex > 0) { // Check if it's not the first year
          setDesiredYear(decades[currentIndex - 1]);
        }
      }}>{"<"}</button>
<button className='px-4 py-1 bg-gray-300' onClick={() => {
  const currentIndex = decades.indexOf(desiredYear.toString());
  console.log(currentIndex, "currentIndex")
  if (currentIndex < decades.length - 1) { // Check if it's not the last year
    console.log("clicked")
    setDesiredYear(decades[currentIndex + 1]);
  }
}}>{">"}</button>
      </div>
    </div>

    <div className="flex flex-col gap-4">
    {filteredTimelineByDecade.map((timelineEvent) => (
      <TimelineBlock key={timelineEvent._id} {...timelineEvent} />
    ))}
    </div>
</div>
  );
}

