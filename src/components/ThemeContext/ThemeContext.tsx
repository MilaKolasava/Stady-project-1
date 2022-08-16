import React from "react";

interface ContextInterface {
  setIsDarkThemeOff: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkThemeOff: boolean;
}

const ThemeContext = React.createContext<ContextInterface>({
  isDarkThemeOff: true,
  setIsDarkThemeOff() {},
});

export default ThemeContext;
