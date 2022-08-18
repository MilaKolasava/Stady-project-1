import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const [isDarkThemeOff, setIsDarkThemeOff] = useState<boolean>(() => true);

  return (
    <ThemeContext.Provider value={{ isDarkThemeOff, setIsDarkThemeOff }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
