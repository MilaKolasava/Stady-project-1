import React, { useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [isDarkThemeOff, setIsDarkThemeOff] = useState(true);

  return (
    <div
      className={`toggle-wrapper toggle-wrapper-${
        isDarkThemeOff ? "dark" : "light"
      }`}
      data-testid="toggle-wrapper"
      onClick={() => {
        setIsDarkThemeOff(!isDarkThemeOff);
      }}
    >
      <div
        className={`toggle-dot dot-${
          isDarkThemeOff ? "right" : "left"
        }-position`}
        data-testid="toggle-dot"
      />

      <div
        className={`toggle-switch toggle-switch-${
          isDarkThemeOff ? "left" : "right"
        }`}
        data-testid="toggle-switch"
      >
        {isDarkThemeOff ? "DARK" : "LIGHT"}
      </div>
    </div>
  );
}

export default Toggle;
