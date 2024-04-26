"use client";

import React, { useEffect, useState } from "react";
import TimelineBlock from "../TimelineBlock";
import "./timeline.css";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";

export default function Timeline({ timelineData }) {
  const [categoriesToFilter, setCategoriesToFilter] = useState(["main"]);
  const [currentDecadeOnSlider, setCurrentDecadeOnSlider] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [decadesToFilter, setDecadesToFilter] = useState(() => {
    if(timelineData.filter((event) => event.tagIds.includes("main")).length === 0) {
      return [0, 0];
    } else {
    let allMainEvents = timelineData.filter((event) => event.tagIds.includes("main"));
    let yearsSet = new Set(allMainEvents.map((event) => event.date.slice(0, 4)));
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


  // FILTERED TIMELINE DATA
  const filteredData = timelineData.filter((event) => {
    let eventYear = Number(event.date.slice(0, 4));
    return event.tagIds.some(tagId => categoriesToFilter.includes(tagId)) && eventYear >= decadesToFilter[0] && eventYear <= decadesToFilter[1];
  }) 

  console.log(currentDecadeOnSlider, "currentDecadeOnSlider");

  const currentDecadeEvents = filteredData.filter((event) => {
    let eventYear = Number(event.date.slice(0, 4));
    let decadeSliderToNumber = Number(currentDecadeOnSlider);
    return (
      eventYear >= decadeSliderToNumber - 10 &&
      eventYear < decadeSliderToNumber + 10
    );
  })

  // DECADES
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
  let categoriesCollection = new Set(timelineData.reduce((acc, event) => acc.concat(event.tagIds), []));
  let categories = Array.from(categoriesCollection).sort();
  categories = categories.map((cat) => {
    let words = cat.replace(/-/g, " ").split(" ");
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return { value: cat, label: words.join(" ") };
  });

  // SET INITIAL DECADE ON SLIDER
  useEffect(() => {
  if(decades.length > 0){
    setCurrentDecadeOnSlider(() => decades[0]);
  } else {
    console.error("No decades to show");
  }
  }, [ decadesToFilter, categoriesToFilter ]);

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
      <FilterMobile timelineData={timelineData} decades={decades} categoriesToFilter={categoriesToFilter} setCategoriesToFilter={setCategoriesToFilter} decadesToFilter={decadesToFilter} setDecadesToFilter={setDecadesToFilter} showFilter={showFilter} setShowFilter={setShowFilter}
      />

      {/* Timeline */}
      <div className=" bg-[#fff] flex flex-col gap-3 relative">
        {/* div containing the filter button */}
        <div className="md:hidden">
          <button
            className="bg-[#c2c2c2] rounded-md px-4 py-1"
            onClick={() => setShowFilter((c) => !c)}
          >
            FILTER
          </button>
        </div>

        {/* div containing the bar where the years are shown */}
        <div className="relative bg-transparent h-[15rem] text-white flex flex-col justify-center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${decades.length}, auto)`,
              padding: "0 50%",
            }}
            className="gap-10 overflow-x-auto slider text-xl h-[5rem] flex-[2] flex items-center z-10"
          >
            {decades.map((year) => (
              <li
                key={crypto.randomUUID()}
                id={year}
                className="text-center list-none cursor-pointer text-white"
                ref={refs1[year]}
                onClick={() => setCurrentDecadeOnSlider(year)}
              >
                <span>{year}</span>
              </li>
            )) }
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
         <FilterDesktop timelineData={timelineData} decades={decades} categoriesToFilter={categoriesToFilter} setCategoriesToFilter={setCategoriesToFilter} decadesToFilter={decadesToFilter} setDecadesToFilter={setDecadesToFilter}/>
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


function FilterDesktop({ timelineData, decades, categoriesToFilter, setCategoriesToFilter, decadesToFilter, setDecadesToFilter }) {

  // GET ALL CATEGORIES FOR FILTERING
  let categoriesSet = new Set(
    timelineData.reduce((acc, event) => acc.concat(event.tagIds), [])
  );
  let categoriesArray = Array.from(categoriesSet).sort();
  categoriesArray = categoriesArray.map((cat) => {
    let words = cat.replace(/-/g, " ").split(" ");
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return { value: cat, label: words.join(" ") };
  });

  // GET ALL DECADES FOR FILTERING
  let allYearsSet = new Set(timelineData.map((event) => event.date.slice(0, 4)))
  let allDecadesArray = Array.from(allYearsSet).sort();
  let allDecadesSet = new Set();
  allDecadesArray.forEach((year) => {
    let startDecade = Math.floor(year / 10) * 10;
    let endDecade = startDecade + 10;
    allDecadesSet.add(startDecade);
    allDecadesSet.add(endDecade);
  })
  allDecadesArray = Array.from(allDecadesSet);

  // HANDLE FILTER RESET BUTTON

  function handleFilterReset(){
    setCategoriesToFilter(["main"]);
    setDecadesToFilter([allDecadesArray[0], allDecadesArray[allDecadesArray.length - 1]])
  }
  

  // HANDLE FILTER CHANGE AND SET MAIN AS DEFAULT
  const handleFilterChange = (e) => {
    const value = e.target.value;

    if (value === "main") {
      setCategoriesToFilter(["main"]);
    } else {
      if (categoriesToFilter.includes(value)) {
        // If the checkbox is already checked, uncheck it
        const newCategory = categoriesToFilter.filter((cat) => cat !== value);
        // If unchecking this checkbox leaves no other checkboxes checked, check 'main'
        if (newCategory.length === 0) {
          setCategoriesToFilter(["main"]);
        } else {
          setCategoriesToFilter(newCategory);
        }
      } else {
        // If the checkbox is not checked, check it and uncheck 'main'
        setCategoriesToFilter(
          categoriesToFilter.filter((cat) => cat !== "main").concat(value)
        );
      }
    }
  };

  return (
        <div
          className={`hidden md:flex z-20 font-[600] text-[1.2rem] flex-col gap-4 border-r border-[#f4f4f4]`}
        >
          <div className="p-2 flex gap-2 font-bold">
            <span>FILTER</span>
          </div>
          
          <div className="bg-white">
            <p className="px-2">ÅRTIONDE</p>
            <MultiRangeSlider
              min={allDecadesArray[0]}
              max={allDecadesArray[allDecadesArray.length - 1]}
              onChange={setDecadesToFilter}
            />
          </div>
          <div className="px-2">
            <p>KATEGORIER</p>
          <ul className="flex flex-wrap gap-2 py-2">
            {categoriesArray.map((cat, index) => (
              <li key={index} style={{ listStyleType: "none", margin: 0}}>
                <label
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: categoriesToFilter.includes(cat.value)
                      ? "#162743"
                      : "#edebe7",
                    color: categoriesToFilter.includes(cat.value)
                    ? "white"
                    : "#162743",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    value={cat.value}
                    checked={categoriesToFilter.includes(cat.value)}
                    onChange={(e) => handleFilterChange(e)}
                    style={{ display: "none" }}
                  />
                  {cat.label}
                </label>
              </li>
            ))}
          </ul>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-1 bg-[#edebe7] text-[#162743] rounded-[10px]" onClick={handleFilterReset}>RENSA</button>
          </div>
        </div>
  )
}


function FilterMobile({ timelineData, decades, categoriesToFilter, setCategoriesToFilter, decadesToFilter, setDecadesToFilter, setShowFilter, showFilter }) {
    
  // GET ALL CATEGORIES FOR FILTERING
    let categoriesSet = new Set(
      timelineData.reduce((acc, event) => acc.concat(event.tagIds), [])
    );
    let categoriesArray = Array.from(categoriesSet).sort();
    categoriesArray = categoriesArray.map((cat) => {
      let words = cat.replace(/-/g, " ").split(" ");
      words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      return { value: cat, label: words.join(" ") };
    });
  
    // GET ALL DECADES FOR FILTERING
    let allYearsSet = new Set(timelineData.map((event) => event.date.slice(0, 4)))
    let allDecadesArray = Array.from(allYearsSet).sort();
    let allDecadesSet = new Set();
    allDecadesArray.forEach((year) => {
      let startDecade = Math.floor(year / 10) * 10;
      let endDecade = startDecade + 10;
      allDecadesSet.add(startDecade);
      allDecadesSet.add(endDecade);
    })
    allDecadesArray = Array.from(allDecadesSet);

    console.log(allDecadesArray , "allDecadesArray")
    
    // HANDLE FILTER RESET BUTTON
    function handleFilterReset(){
      setCategoriesToFilter(["main"]);
      setDecadesToFilter([allDecadesArray[0], allDecadesArray[allDecadesArray.length - 1]])
    }
  
    // HANDLE FILTER CHANGE AND SET MAIN AS DEFAULT
    const handleFilterChange = (e) => {
      const value = e.target.value;
  
      if (value === "main") {
        setCategoriesToFilter(["main"]);
      } else {
        if (categoriesToFilter.includes(value)) {
          // If the checkbox is already checked, uncheck it
          const newCategory = categoriesToFilter.filter((cat) => cat !== value);
          // If unchecking this checkbox leaves no other checkboxes checked, check 'main'
          if (newCategory.length === 0) {
            setCategoriesToFilter(["main"]);
          } else {
            setCategoriesToFilter(newCategory);
          }
        } else {
          // If the checkbox is not checked, check it and uncheck 'main'
          setCategoriesToFilter(
            categoriesToFilter.filter((cat) => cat !== "main").concat(value)
          );
        }
      }
    };
  
  return (
    <div
        className={`absolute md:hidden w-full h-full z-[15] ${
          showFilter ? "flex justify-center" : "hidden"
        }`}
      >
        <div
          className={`fixed w-full h-full bottom-0 bg-[#979595e7] z-[16] ${
            showFilter ? "block" : "hidden"
          }`}
          onClick={() => setShowFilter(false)}
        ></div>
        <div
          className={`fixed mt-4 z-20 h-[80%] bg-white w-[95%] max-w-[30rem] rounded-[15px] font-[600] text-[1.2rem] gap-4 ${
            showFilter ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="p-2 flex gap-2 font-bold">
            <button onClick={() => setShowFilter(false)}>X</button>
            <span>FILTER</span>
          </div>
          
          <div className="bg-white">
            <p className="px-2">ÅRTIONDE</p>
            <MultiRangeSlider
              min={allDecadesArray[0]}
              max={allDecadesArray[allDecadesArray.length - 1]}
              onChange={setDecadesToFilter}
            />
          </div>
          <div className="px-2">
            <p>KATEGORIER</p>
          <ul className="flex flex-wrap gap-2 py-2">
            {categoriesArray.map((cat, index) => (
              <li key={index} style={{ listStyleType: "none", margin: 0}}>
                <label
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: categoriesToFilter.includes(cat.value)
                      ? "#162743"
                      : "#edebe7",
                    color: categoriesToFilter.includes(cat.value)
                    ? "white"
                    : "#162743",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    value={cat.value}
                    checked={categoriesToFilter.includes(cat.value)}
                    onChange={(e) => handleFilterChange(e)}
                    style={{ display: "none" }}
                  />
                  {cat.label}
                </label>
              </li>
            ))}
          </ul>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-1 bg-[#0679ae] text-white rounded-[10px]" onClick={() => setShowFilter(false)}>FILTRERA</button>
            {/* <button className="px-4 py-1 bg-[#edebe7] text-[#162743] rounded-[10px]" onClick={handleFilterReset}>RENSA</button> */}
          </div>
        </div>
      </div>
  )
}