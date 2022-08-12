import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";
import "./SkeletonElement.css";

function SkeletonWeather() {
  return (
    <div className="skeleton-wrapper" data-testid="skeleton-wrapper">
      <div className="skeleton-weather" data-testid="skeleton-weather">
        <div className="skeleton-header" data-testid="skeleton-header">
          <SkeletonElement type="title" />
        </div>
        <div className="skeleton-block1" data-testid="skeleton-block1">
          <SkeletonElement type="text" />
          <div className="skeleton-block2" data-testid="skeleton-block2">
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
}

export default SkeletonWeather;
