import React from 'react'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'

export default function FilterMobile({ showFilter, setShowFilter, categories, selectedCategories, handleFilterChange, handleFilterReset, decades, setValue }) {
  return (
    <div
        className={`absolute w-full h-full z-[15] ${
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
              min={decades[0]}
              max={decades[decades.length - 1]}
              onChange={setValue}
            />
          </div>
          <div className="px-2">
            <p>KATEGORIER</p>
          <ul className="flex flex-wrap gap-2 py-2">
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
            <button className="px-4 py-1 bg-[#0679ae] text-white rounded-[10px]" onClick={() => setShowFilter(false)}>FILTRERA</button>
            <button className="px-4 py-1 bg-[#edebe7] text-[#162743] rounded-[10px]" onClick={handleFilterReset}>RENSA</button>
          </div>
        </div>
      </div>
  )
}
