import React from 'react'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'

/**
 * FilterDesktop component for filtering data based on categories and decades.
 * @param {Object} props - The props object.
 * @param {Array} props.categories - The list of categories.
 * @param {Array} props.selectedCategories - The list of selected categories.
 * @param {Function} props.handleFilterChange - The function to handle filter changes.
 * @param {Function} props.handleFilterReset - The function to handle filter resets.
 * @param {Array} props.decades - The list of decades.
 * @param {Function} props.setValue - The function to set the value of the range slider.
 * @param {Array} props.value - The current value of the range slider.
 */
export default function FilterDesktop({ categories, selectedCategories, handleFilterChange, handleFilterReset, decades, setValue, value }) {

  return (
   
        <div
          className={`z-20 font-[600] text-[1.2rem] flex flex-col gap-4 border-r border-[#f4f4f4]`}
        >
          <div className="p-2 flex gap-2 font-bold">
            <span>FILTER</span>
          </div>
          
          <div className="bg-white">
            <p className="px-2">ÅRTIONDE</p>
            {/* MultiRangeSlider component for selecting a range of decades */}
            <MultiRangeSlider
              min={decades[0]}
              max={decades[decades.length - 1]}
              onChange={setValue}
            />
          </div>
          <div className="px-2">
            <p>KATEGORIER</p>
          <ul className="flex flex-wrap gap-2 py-2">
            {/* Map over the categories and create a list item for each one */}
            {categories.map((cat, index) => (
              <li key={index} style={{ listStyleType: "none", margin: 0}}>
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
          </ul>
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-1 bg-[#edebe7] text-[#162743] rounded-[10px]" onClick={handleFilterReset}>RENSA</button>
          </div>
        </div>
  )
}
