import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="spinner-container" data-testid="spinner-container">
      <div className="loading-spinner" data-testid="loading-spinner" />
    </div>
  );
}

export default LoadingSpinner;
