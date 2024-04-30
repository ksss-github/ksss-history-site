"use client";

import React, { useEffect, useState } from "react";
import TimelineBlock from "../TimelineBlock";
import "./timeline.css";
import FilterDesktopRange from "./FilterDesktopRange";
import FilterMobileRange from "./FilterMobileRange";
import RulerLines from "./RulerLines";
import { useMediaQuery } from 'react-responsive';
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Timeline({ timelineData }) {
  const [categoriesToFilter, setCategoriesToFilter] = useState(["main"]);
  const [currentDecadeOnSlider, setCurrentDecadeOnSlider] = useState("");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [showFilter, setShowFilter] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });
  const [decadesToFilter, setDecadesToFilter] = useState(() => {
    if (
      timelineData.filter((event) => event.tagIds.includes("main")).length === 0
    ) {
      return [0, 0];
    } else {
      let allMainEvents = timelineData.filter((event) =>
        event.tagIds.includes("main")
      );
      let yearsSet = new Set(
        allMainEvents.map((event) => event.date.slice(0, 4))
      );
      let yearsArray = Array.from(yearsSet).sort();
      let decadesSet = new Set();
      yearsArray.forEach((year) => {
        let startDecade = Math.floor(year / 10) * 10;
        let endDecade = startDecade + 10;
        decadesSet.add(startDecade);
        decadesSet.add(endDecade);
      });
      let decades = Array.from(decadesSet);
      return [decades[0], decades[decades.length - 1]];
    }
  });
  

  // RENDER DYANMICALLY THE NUMBER OF LINES ON THE RULER BASED ON THE VIEWPORT WIDTH
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shortLinesCount = viewportWidth > 768 ? 200 : 100; // fewer lines on mobile
  const longLinesCount = viewportWidth > 768 ? 20 : 10; // fewer lines on mobile

  // FILTERED TIMELINE DATA
  const filteredData = timelineData.filter((event) => {
    let eventYear = Number(event.date.slice(0, 4));
    return (
      event.tagIds.some((tagId) => categoriesToFilter.includes(tagId)) &&
      eventYear >= decadesToFilter[0] &&
      eventYear <= decadesToFilter[1]
    );
  });

  const currentDecadeEvents = filteredData.filter((event) => {
    let eventYear = Number(event.date.slice(0, 4));
    let decadeSliderToNumber = Number(currentDecadeOnSlider);
    return (
      eventYear >= decadeSliderToNumber - 10 &&
      eventYear < decadeSliderToNumber + 10
    );
  });

  // DECADES FROM FILTERED DATA 
  let yearsSet = new Set(filteredData.map((event) => event.date.slice(0, 4)));
  let yearsArray = Array.from(yearsSet).sort();
  let decadesSet = new Set();
  yearsArray.forEach((year) => {
    let startDecade = Math.floor(year / 10) * 10;
    let endDecade = startDecade + 10;
    decadesSet.add(startDecade);
    decadesSet.add(endDecade);
  });
  let decades = Array.from(decadesSet);

  // FILTERED CATEGORIES
  let categoriesCollection = new Set(
    timelineData.reduce((acc, event) => acc.concat(event.tagIds), [])
  );
  let categories = Array.from(categoriesCollection).sort();
  categories = categories.map((cat) => {
    let words = cat.replace(/-/g, " ").split(" ");
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return { value: cat, label: words.join(" ") };
  });

  // SET INITIAL DECADE ON SLIDER
  useEffect(() => {
    if (decades.length > 0) {
      setCurrentDecadeOnSlider(() => decades[0]);
    } else {
      console.error("No decades to show");
    }
  }, [decadesToFilter, categoriesToFilter]);

  // LINK DECADE ELEMENTS IN THE SLIDER TO REFERENCES FOR HANDLING CLICKS AND SCROLL
  const refs1 = decades.reduce((acc, value) => {
    acc[value] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (refs1[currentDecadeOnSlider] && refs1[currentDecadeOnSlider].current) {
      refs1[currentDecadeOnSlider].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentDecadeOnSlider]);


  return (
    <div>
      {!isDesktopOrLaptop && <FilterMobileRange
        timelineData={timelineData}
        categoriesToFilter={categoriesToFilter}
        setCategoriesToFilter={setCategoriesToFilter}
        setDecadesToFilter={setDecadesToFilter}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />}

      {/* Timeline */}
      <div className=" bg-[#fff] flex flex-col relative">
        {/* div containing the filter button */}
        <div className="md:hidden  bg-[var(--mainblue)] border-b border-[#3a3a3a] flex justify-center p-1">
          <button
            className="bg-[var(--mainblue)] text-white rounded-xl px-4 py-1 font-bold"
            onClick={() => setShowFilter((c) => !c)}
          >
            <FontAwesomeIcon icon={faFilter} /> FILTER
          </button>
        </div>

        {/* div containing the bar where the years are shown */}
        <div className="relative bg-transparent h-[15rem] text-white flex flex-col justify-center">
          <RulerLines shortLinesCount={shortLinesCount} longLinesCount={longLinesCount} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${
                decades ? decades.length : 1
              }, auto)`,
              padding: "0 50%",
            }}
            className="gap-10 overflow-x-auto slider text-xl h-[5rem] flex-[2] flex items-center z-10"
          >
            {decades
              ? decades.map((year) => (
                  <li
                    key={crypto.randomUUID()}
                    id={year}
                    className="text-center list-none cursor-pointer text-white"
                    ref={refs1[year]}
                    onClick={() => setCurrentDecadeOnSlider(year)}
                  >
                    <span className=" ">{year}</span>
                  </li>
                ))
              : "No decades to show"}
          </div>
          <div className="flex-[1] flex justify-end items-end z-10">
            <div className="text-6xl font-bold">{currentDecadeOnSlider}</div>
          </div>
          <div className="grid grid-cols-2 absolute top-0 left-0 bottom-0 right-0">
            <div className=" bg-[#162743] border-red-600 border-r-[0.2px]"></div>
            <div className="bg-[#162743] "></div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-[22rem,_1fr] h-lvh">
        {isDesktopOrLaptop && <FilterDesktopRange
          timelineData={timelineData}
          categoriesToFilter={categoriesToFilter}
          setCategoriesToFilter={setCategoriesToFilter}
          setDecadesToFilter={setDecadesToFilter}
        />}
        <div className="flex flex-col gap-4 p-2 items-center">
          {currentDecadeEvents.length > 0
            ? currentDecadeEvents.map((timelineEvent) => {
                return (
                  <TimelineBlock key={timelineEvent._id} {...timelineEvent} />
                );
              })
            : "No events for this decade."}
        </div>
      </section>
    </div>
  );
}
