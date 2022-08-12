import React from "react";
import "./SkeletonElement.css";

interface SkeletonElements {
  type: string;
}

function SkeletonElement(props: SkeletonElements) {
  const classes = `skeleton ${props.type}`;

  return <div className={classes}></div>;
}

export default SkeletonElement;
