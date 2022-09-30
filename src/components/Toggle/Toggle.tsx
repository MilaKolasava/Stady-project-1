import React, { useContext } from "react";
import "./Toggle.css";
import getColorTheme from "../../utils/getColorTheme";
import { useIntl } from "react-intl";
import ThemeContext from "../ThemeContext/ThemeContext";

function Toggle() {
  const intl = useIntl();
  const { isDarkThemeOff, setIsDarkThemeOff } = useContext(ThemeContext);

  return (
    <div
      className={`toggle-wrapper toggle-wrapper-${getColorTheme(
        isDarkThemeOff
      )}`}
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
        {intl.formatMessage({ id: getColorTheme(isDarkThemeOff) })}
      </div>
    </div>
  );
}

export default Toggle;
