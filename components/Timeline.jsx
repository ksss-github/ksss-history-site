"use client"

import React, { useEffect, useState } from 'react';
import TimelineBlock from './TimelineBlock';

export default function Timeline({timelineData}) {
  const [desiredDecade, setDesiredDecade] = useState("");
  const [category, setCategory] = useState(["main"]);
  const [showFilter, setShowFilter] = useState(false);

  const filteredTimelineByCategory = timelineData.filter(event => {
    if (category.length === 0) {
      return true;
    }
    return event.tagIds.some(tagId => category.includes(tagId))
  });
  
  const filteredTimelineByYears = filteredTimelineByCategory.filter(event => {
    let eventYear = Number(event.date.slice(0,4))
    let desiredDecadeToNumber = Number(desiredDecade)
    return eventYear >= desiredDecadeToNumber - 10 && eventYear < desiredDecadeToNumber + 10
}).sort((a, b) => new Date(a.date) - new Date(b.date));


  // Get all the years from every event, remove duplicates with set, and sort them
  let yearsCollection = new Set(filteredTimelineByCategory.map((event) => event.date.slice(0,4)));
  let allYears = Array.from(yearsCollection).sort();
  let decades = []

  // Generate the decades for each added year
  allYears.forEach(year => {
    let startDecade = Math.floor(year / 10) * 10;
    if (!decades.includes(startDecade)) {
      decades.push(startDecade);
    }
  });

  // Get all the categories for the filter
  let categoriesCollection = new Set(timelineData.map((event) => event.tagIds[0]));
  let categories = Array.from(categoriesCollection).sort();


  categories = categories.map(category => {
    let words = category.replace(/-/g, ' ').split(' ');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return {value: category, label: words.join(' ')};
  });

  



  // Create refs for each decade to scroll to
  const refs = decades.reduce((acc, value) => {
    acc[value] = React.createRef();
    return acc;
  }, {});

  // Set default year to the first item in the current category
  useEffect(() => {
    setDesiredDecade(decades[0]);
  }, [category])


  // Scroll to the desired year when it changes
  useEffect(() => {
    if (refs[desiredDecade]) { // Check if the ref exists
      refs[desiredDecade].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [desiredDecade]);

  
  // handle changes to filter checkboxes
  const handleFilterChange = (e) => {
    const value = e.target.value;
  
    if (value === 'main') {
      // If the 'main' checkbox is checked, uncheck all other checkboxes
      setCategory(['main']);
    } else {
      if (category.includes(value)) {
        // If the checkbox is already checked, uncheck it
        const newCategory = category.filter(cat => cat !== value);
        // If unchecking this checkbox leaves no other checkboxes checked, check 'main'
        if (newCategory.length === 0) {
          setCategory(['main']);
        } else {
          setCategory(newCategory);
        }
      } else {
        // If the checkbox is not checked, check it and uncheck 'main'
        setCategory(category.filter(cat => cat !== 'main').concat(value));
      }
    }
  }

  return (
    <div>
    <div className=" bg-red-200 flex flex-col py-4 gap-3">

      {/* div containing the filter button */}
      <div className='relative'>
        <button className='bg-[#c2c2c2] rounded-md' onClick={() => setShowFilter(c => !c)}>Filter</button>
        <div className={`absolute top-full z-20 left-0 bg-blue-300 ${showFilter ? "flex flex-col" : "hidden"}`}>
          <ul>
            {categories.map((cat, index) => (
              <li key={index}>
                <input type='checkbox' value={cat.value} checked={category.includes(cat.value)} onChange={(e) => handleFilterChange(e)} />
                <label>{cat.label}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* div containing the bar where the years are shown */}
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
            <li key={index} id={year} className="text-center list-none cursor-pointer" ref={refs[year]} onClick={() => setDesiredDecade(year)}>
              <span>{year}</span>
            </li>
          ))}
        </div>
      </div>

      {/* gray area to simulate the middle point or arrow */}
      <div className='grid grid-cols-2 h-4'>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-400'></div>
      </div>

      {/* buttons for the slider */}
      <div className='flex justify-center gap-2 py-2'>
        <button className='px-4 py-1 bg-gray-300' onClick={() => {
          const currentIndex = decades.indexOf(desiredDecade);
          if (currentIndex > 0) { // Check if it's not the first year
            setDesiredDecade(decades[currentIndex - 1]);
          }
        }}>{"<"}</button>
        <button className='px-4 py-1 bg-gray-300' onClick={() => {
          const currentIndex = decades.indexOf(desiredDecade.toString());
          console.log(currentIndex, "currentIndex")
          if (currentIndex < decades.length - 1) { // Check if it's not the last year
            console.log("clicked")
            setDesiredDecade(decades[currentIndex + 1]);
          }
        }}>{">"}</button>
      </div>
    </div>

    <div className="flex flex-col gap-4">
    {filteredTimelineByYears.map((timelineEvent) => (
      <TimelineBlock key={timelineEvent._id} {...timelineEvent} />
    ))}
    </div>
</div>
  );
}

