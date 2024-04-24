import React, { useEffect, useRef, useState } from "react";
import TimelineBlock from "./TimelineBlock";

export default function Timeline({ timelineData }) {
  const [desiredYear, setDesiredYear] = useState("1990");
  const [category, setCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const timelineContainerRef = useRef(null);

  const filteredTimelineByCategory = timelineData.filter((event) => {
    if (category.length === 0) {
      return true;
    }
    return category.includes(event.tags[0]);
  });

  const filteredTimelineByDecade = filteredTimelineByCategory.filter(
    (event) => event.date.slice(0, 4) === desiredYear
  );

  // Get all the decades for the slider sorted
  let decadesCollection = new Set(
    filteredTimelineByCategory.map((event) => event.date.slice(0, 4))
  );
  let decades = Array.from(decadesCollection).sort();

  // Get all the categories for the filter
  let categoriesCollection = new Set(
    timelineData.map((event) => event.tags[0])
  );
  let categories = Array.from(categoriesCollection).sort();

  categories = categories.map((category) => {
    let words = category.replace(/-/g, " ").split(" ");
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return { value: category, label: words.join(" ") };
  });

  // handle changes to filter checkboxes
  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((cat) => cat !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  // Scroll to the desired year when it changes
  useEffect(() => {
    if (timelineContainerRef.current) {
      timelineContainerRef.current.scrollLeft =
        timelineContainerRef.current.scrollWidth / 2;
    }
  }, []);

  const scrollTo = (direction) => {
    const container = timelineContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth / 2;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <div className="bg-red-200 flex flex-col py-4 gap-3">
        {/* Filter button */}
        <div className="relative">
          <button
            className="bg-gray-300 rounded-md px-4 py-2"
            onClick={() => setShowFilter((c) => !c)}
          >
            Filter
          </button>
          <div
            className={`absolute top-full z-20 left-0 bg-blue-300 ${
              showFilter ? "flex flex-col" : "hidden"
            }`}
          >
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    value={category.value}
                    onChange={(e) => handleFilterChange(e)}
                  />
                  <label>{category.label}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline years */}
        <div className="relative py-5 bg-red-400 overflow-x-hidden">
          <div
            className="flex items-center justify-center overflow-x-hidden"
            ref={timelineContainerRef}
          >
            {decades.map((year, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => setDesiredYear(year)}
              >
                <span>{year}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
            <button
              className="px-4 py-2 bg-gray-300"
              onClick={() => scrollTo("left")}
            >
              {"<"}
            </button>
            <button
              className="px-4 py-2 bg-gray-300"
              onClick={() => scrollTo("right")}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Gray area */}
        <div className="grid grid-cols-2 h-4">
          <div className="bg-gray-300"></div>
          <div className="bg-gray-400"></div>
        </div>
      </div>

      {/* Timeline blocks */}
      <div className="flex flex-col gap-4">
        {filteredTimelineByDecade.map((timelineEvent) => (
          <TimelineBlock key={timelineEvent._id} {...timelineEvent} />
        ))}
      </div>
    </div>
  );
}
