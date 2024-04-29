"use client"

import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange([ minVal, maxVal]);
  }, [minVal, maxVal, onChange]);

  useEffect(() => {
    setMinVal(min);
    setMaxVal(max);
  }, [min, max]);

  return (
    <div className="slider-container">
  <div className="val-text">{minVal}</div>
  <div>
    <input
      type="range"
      min={min}
      max={max}
      step="10"
      value={minVal}
      ref={minValRef}
      onChange={(event) => {
        const value = Math.min(Number(event.target.value), maxVal - 10);
        setMinVal(value);
        event.target.value = value.toString();
      }}
      className={classnames("thumb thumb--zindex-3", {
        "thumb--zindex-5": minVal > max - 100
      })}
    />
    <input
      type="range"
      min={min}
      max={max}
      step="10"
      value={maxVal}
      ref={maxValRef}
      onChange={(event) => {
        const value = Math.max(Number(event.target.value), minVal + 10);
        setMaxVal(value);
        event.target.value = value.toString();
      }}
      className="thumb thumb--zindex-4"
    />

    <div className="slider">
      <div className="slider__track" />
      <div ref={range} className="slider__range" />
    </div>
  </div>
  <div className="val-text">

  {maxVal}
  </div>
</div>
  );
};


export default MultiRangeSlider;