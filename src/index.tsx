import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContext from "./components/ThemeContext/ThemeContext";

function Main() {
  const [isDarkThemeOff, setIsDarkThemeOff] = useState<boolean>(() => true);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeContext.Provider value={{ isDarkThemeOff, setIsDarkThemeOff }}>
          <App />
        </ThemeContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
