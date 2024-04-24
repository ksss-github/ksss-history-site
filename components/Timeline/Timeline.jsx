"use client";

import React, { useEffect, useState } from "react";
import TimelineBlock from "../TimelineBlock";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import "./timeline.css";

export default function Timeline({ timelineData }) {
  const [currentDecadeSlider, setCurrentDecadeSlider] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["main"]);
  const [showFilter, setShowFilter] = useState(false);
  const [value, setValue] = useState([0, 0]);

  const filteredTimelineByCategory = timelineData.filter((event) => {
    return event.tagIds.some((tagId) => selectedCategories.includes(tagId));
  });

  const filteredTimelineByYears = filteredTimelineByCategory.filter((event) => {
    let eventYear = Number(event.date.slice(0, 4));
    return eventYear >= value[0] && eventYear <= value[1];
  });

  const currentDecadeEvents = filteredTimelineByYears
    .filter((event) => {
      let eventYear = Number(event.date.slice(0, 4));
      let decadeSliderToNumber = Number(currentDecadeSlider);
      return (
        eventYear >= decadeSliderToNumber - 10 &&
        eventYear < decadeSliderToNumber + 10
      );
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Get all the years from every event, remove duplicates with set, and sort them
  let yearsCollection = new Set(
    filteredTimelineByCategory.map((event) => event.date.slice(0, 4))
  );
  let allYears = Array.from(yearsCollection).sort();
  let decadesSet = new Set();

  // Generate the decades for each added year
  allYears.forEach((year) => {
    let startDecade = Math.floor(year / 10) * 10;
    let endDecade = startDecade + 10;

    decadesSet.add(startDecade);
    decadesSet.add(endDecade);
  });

  let decades = Array.from(decadesSet);

  const filteredDecades = decades.filter((decade) => {
    return decade >= value[0] && decade <= value[1];
  });

  // Get all the categories for the filter
  let categoriesCollection = new Set(
    timelineData.reduce((acc, event) => acc.concat(event.tagIds), [])
  );
  let categories = Array.from(categoriesCollection).sort();
  categories = categories.map((cat) => {
    let words = cat.replace(/-/g, " ").split(" ");
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return { value: cat, label: words.join(" ") };
  });

  // Create refs for each decade to scroll to
  const refs = decades.reduce((acc, value) => {
    acc[value] = React.createRef();
    return acc;
  }, {});

  // Set default year to the first item in the current categories
  useEffect(() => {
    setCurrentDecadeSlider(filteredDecades[0]);
  }, [value]);

  // Scroll to the desired year when it changes
  useEffect(() => {
    if (refs[currentDecadeSlider]) {
      // Check if the ref exists
      refs[currentDecadeSlider].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentDecadeSlider]);

  // handle changes to filter checkboxes
  const handleFilterChange = (e) => {
    const value = e.target.value;

    if (value === "main") {
      // If the 'main' checkbox is checked, uncheck all other checkboxes
      setSelectedCategories(["main"]);
    } else {
      if (selectedCategories.includes(value)) {
        // If the checkbox is already checked, uncheck it
        const newCategory = selectedCategories.filter((cat) => cat !== value);
        // If unchecking this checkbox leaves no other checkboxes checked, check 'main'
        if (newCategory.length === 0) {
          setSelectedCategories(["main"]);
        } else {
          setSelectedCategories(newCategory);
        }
      } else {
        // If the checkbox is not checked, check it and uncheck 'main'
        setSelectedCategories(
          selectedCategories.filter((cat) => cat !== "main").concat(value)
        );
      }
    }
  };

  function handleFilterReset(){
    setSelectedCategories(["main"]);
    setValue([0, 0]);
  }

  console.log(selectedCategories, "selectedCategories", value, "value")

  return (
    <div>
      {/* Filter */}
      <div
        className={`fixed w-full h-full z-[15] ${
          showFilter ? "flex justify-center" : "hidden"
        }`}
      >
        <div
          className={`absolute w-full h-full bg-[#979595e7] z-[16] ${
            showFilter ? "block" : "hidden"
          }`}
          onClick={() => setShowFilter(false)}
        ></div>
        <div
          className={`mt-4 z-20 h-[80%] bg-white w-[95%] max-w-[30rem] rounded-[15px] font-[600] text-[1.2rem] gap-4 ${
            showFilter ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="p-2 flex gap-2 font-bold">
            <button onClick={() => setShowFilter(false)}>X</button>
            <span>FILTER</span>
          </div>
          {/* <div className="bg-[#edebe7] flex flex-wrap">
            {categories
              .filter((c) => selectedCategories.includes(c.value))
              .map((cat) => (
                <span key={cat.value} className="bg-[#162743] text-white font-semibold rounded-sm p-2">
                  {cat.label}
                </span>
              ))}
          </div> */}
          <div className="bg-white">
            <p className="px-2">ÅRTIONDE</p>
            <MultiRangeSlider
              min={decades[0]}
              max={decades[decades.length - 1]}
              onChange={setValue}
            />
          </div>
          <div className="px-2">
            <p>KATEGORIER</p>
          <ul className="flex flex-wrap gap-2 py-2">
            {categories.map((cat, index) => (
              <li key={index} style={{ listStyleType: "none"}}>
                <label
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: selectedCategories.includes(cat.value)
                      ? "#162743"
                      : "#edebe7",
                    color: selectedCategories.includes(cat.value)
                    ? "white"
                    : "#162743",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    value={cat.value}
                    checked={selectedCategories.includes(cat.value)}
                    onChange={(e) => handleFilterChange(e)}
                    style={{ display: "none" }}
                  />
                  {cat.label}
                </label>
              </li>
            ))}
            {/* {categories.map((cat, index) => (
              <li key={index}>
                <input type='checkbox' value={cat.value} checked={selectedCategories.includes(cat.value)} onChange={(e) => handleFilterChange(e)} />
                <label>{cat.label}</label>
              </li>
            ))} */}
          </ul>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-1 bg-[#0679ae] text-white rounded-[10px]" onClick={() => setShowFilter(false)}>FILTRERA</button>
            <button className="px-4 py-1 bg-[#edebe7] text-[#162743] rounded-[10px]">RENSA</button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className=" bg-[#fff] flex flex-col py-4 gap-3 relative">
        {/* div containing the filter button */}
        <div>
          <button
            className="bg-[#c2c2c2] rounded-md px-4 py-1"
            onClick={() => setShowFilter((c) => !c)}
          >
            FILTER
          </button>
        </div>

        {/* div containing the bar where the years are shown */}
        <div className="relative bg-transparent  h-[15rem] text-white flex flex-col justify-center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${decades.length}, auto)`,
              padding: "0 50%",
            }}
            className="gap-10 overflow-x-auto slider text-xl h-[5rem] flex-[2] flex items-center z-10"
          >
            {filteredDecades.map((year, index) => (
              <li
                key={index}
                id={year}
                className="text-center list-none cursor-pointer"
                ref={refs[year]}
                onClick={() => setCurrentDecadeSlider(year)}
              >
                <span>{year}</span>
              </li>
            ))}
          </div>
          <div className="flex-[1] flex justify-end items-end z-10">
            <div className="text-6xl font-bold">{currentDecadeSlider}</div>
          </div>
          <div className="grid grid-cols-2 absolute top-0 left-0 bottom-0 right-0">
            <div className=" bg-[#162743] border-red-600 border-r-[0.2px]"></div>
            <div className="bg-[#162743] "></div>
          </div>
        </div>

        {/* buttons for the slider */}
        {/* <div className='flex justify-center gap-2 py-2'>
        <button className='px-4 py-1 bg-gray-300' onClick={() => {
          const currentIndex = decades.indexOf(currentDecadeSlider);
          if (currentIndex > 0) { // Check if it's not the first year
            setCurrentDecadeSlider(decades[currentIndex - 1]);
          }
        }}>{"<"}</button>
        <button className='px-4 py-1 bg-gray-300' onClick={() => {
          const currentIndex = decades.indexOf(currentDecadeSlider.toString());
          console.log(currentIndex, "currentIndex")
          if (currentIndex < decades.length - 1) { // Check if it's not the last year
            console.log("clicked")
            setCurrentDecadeSlider(decades[currentIndex + 1]);
          }
        }}>{">"}</button>
      </div> */}
      </div>

      <div className="flex flex-col gap-4">
        {currentDecadeEvents.length > 0
          ? currentDecadeEvents.map((timelineEvent) => {
              return (
                <TimelineBlock key={timelineEvent._id} {...timelineEvent} />
              );
            })
          : "No events for this decade."}
      </div>
    </div>
  );
}
