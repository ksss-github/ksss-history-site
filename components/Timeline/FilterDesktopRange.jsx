"use client";

import { useState } from "react";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import {
  getAllCategoriesFilter,
  getAllDecadesFilter,
  handleFilterChange,
} from "./filter-utils";

export default function FilterDesktopRange({
  timelineData,
  categoriesToFilter,
  setCategoriesToFilter,
  setDecadesToFilter,
}) {
  const [isReset, setIsReset] = useState(false);

  // GET ALL CATEGORIES FOR FILTERING
  const allCategories = getAllCategoriesFilter(timelineData);

  // GET ALL DECADES FOR FILTERING
  const allDecadesFromCategoriesToFilter = getAllDecadesFilter(
    timelineData,
    categoriesToFilter
  );

  // HANDLE FILTER RESET BUTTON
  function handleFilterReset() {
    setCategoriesToFilter(["main"]);
    setIsReset(true);
    setDecadesToFilter([
      allDecadesFromCategoriesToFilter[0],
      allDecadesFromCategoriesToFilter[
        allDecadesFromCategoriesToFilter.length - 1
      ],
    ]);
  }


  return (
    <div
      className={`hidden md:flex z-20 font-[600] text-[1.2rem] flex-col gap-4 border-r-[2px] border-[#f7f7f7]`}
    >
      <div className="p-2 flex gap-2 font-bold">
        <span>FILTER</span>
      </div>

      <div className="bg-white">
        <p className="px-2">ÅRTIONDE</p>
        <MultiRangeSlider
        isReset={isReset}
        onReset={() => setIsReset(false)}
          min={allDecadesFromCategoriesToFilter[0]}
          max={
            allDecadesFromCategoriesToFilter[
              allDecadesFromCategoriesToFilter.length - 1
            ]
          }
          onChange={setDecadesToFilter}
        />
      </div>
      <div className="px-2">
        <p>KATEGORIER</p>
        <ul className="flex flex-wrap gap-2 py-2">
          {allCategories.map((cat, index) => (
            <li key={index} style={{ listStyleType: "none", margin: 0 }}>
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
                  onChange={(e) =>
                    handleFilterChange(
                      e,
                      setCategoriesToFilter,
                      categoriesToFilter
                    )
                  }
                  style={{ display: "none" }}
                />
                {cat.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-1 bg-[#edebe7] text-[#162743] rounded-[10px]"
          onClick={handleFilterReset}
        >
          RENSA
        </button>
      </div>
    </div>
  );
}
