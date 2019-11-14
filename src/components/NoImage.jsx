import React from "react";

const NoImage = ({ stroke = "#555", fill = "#f9f9f9" }) => {
  return (
    <svg width="440px" height="440px" viewBox="0 0 441 441" version="1.1" id="svg-no-image">
      <defs id="defs2" />
      <g id="layer1" transform="translate(0,143)">
        <path id="one" fill={fill} stroke={stroke} d="M 440.78091,297.74834 220.39045,77.357885 0,297.74834 Z" />
        <path id="two" fill={fill} stroke={stroke} d="M -1e-5,297.74835 220.39045,77.357885 -1e-5,-143.03257 Z" />
        <path id="three" fill={fill} stroke={stroke} d="M -3.6e-5,-143.03259 220.39045,77.357885 440.7809,-143.03259 Z" />
        <path id="four" fill={fill} stroke={stroke} d="M 440.78092,-143.0326 220.39045,77.357885 440.78092,297.74833 Z" />
      </g>
    </svg>
  )
}

export default NoImage