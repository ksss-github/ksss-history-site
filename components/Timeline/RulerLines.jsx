import React from 'react'

export default function RulerLines({ shortLinesCount, longLinesCount}) {
  return (
    <svg
  width="100%"
  height="50"
  style={{ position: "absolute", top: "50%", zIndex: 2 }}
>
  {/* Create short lines */}
  {Array.from({ length: shortLinesCount }, (_, i) => (
    <line
      key={i}
      x1={`${i * (100 / shortLinesCount)}%`}
      y1="40%"
      x2={`${i * (100 / shortLinesCount)}%`}
      y2="60%"
      stroke="white"
      strokeWidth="1"
    />
  ))}

  {/* Create long lines every 5th line */}
  {Array.from({ length: longLinesCount }, (_, i) => (
    <line
      key={i}
      x1={`${i * (100 / longLinesCount)}%`}
      y1="0"
      x2={`${i * (100 / longLinesCount)}%`}
      y2="100%"
      stroke="white"
      strokeWidth="2"
    />
  ))}

  {/* Add a horizontal line across the middle */}
  <line
    x1="0%"
    y1="50%"
    x2="100%"
    y2="50%"
    stroke="white"
    strokeWidth="2"
  />
</svg>
  )
}
