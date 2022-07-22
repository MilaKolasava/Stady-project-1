import React from "react";
import "./Toggle.css";

interface TogglesProps {
  setIsDarkThemeOff: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkThemeOff: boolean;
}

function Toggle(props: TogglesProps) {
  return (
    <div
      className={`toggle-wrapper toggle-wrapper-${
        props.isDarkThemeOff ? "dark" : "light"
      }`}
      data-testid="toggle-wrapper"
      onClick={() => {
        props.setIsDarkThemeOff(!props.isDarkThemeOff);
      }}
    >
      <div
        className={`toggle-dot dot-${
          props.isDarkThemeOff ? "right" : "left"
        }-position`}
        data-testid="toggle-dot"
      />
      <div
        className={`toggle-switch toggle-switch-${
          props.isDarkThemeOff ? "left" : "right"
        }`}
        data-testid="toggle-switch"
      >
        {props.isDarkThemeOff ? "DARK" : "LIGHT"}
      </div>
    </div>
  );
}

export default Toggle;
