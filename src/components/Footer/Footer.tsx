import React, { useContext } from "react";
import "./Footer.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin-icon.svg";
import { ReactComponent as GitHub } from "../../assets/github-icon.svg";
import getColorTheme from "../../utils/getColorTheme";
import ThemeContext from "../ThemeContext/ThemeContext";

function Footer() {
  const { isDarkThemeOff } = useContext(ThemeContext);

  return (
    <nav
      className={`wrapper wrapper-${getColorTheme(isDarkThemeOff)}`}
      id="footer"
      data-testid="footer-wrapper"
    >
      <a
        href="http://www.linkedin.com/in/luydmila-kolasava-1940a01b0"
        target="_blank"
      >
        <LinkedIn
          className={`svg-picture svg-picture-${getColorTheme(isDarkThemeOff)}`}
        />
      </a>
      <a href="https://github.com/MilaKolasava" target="_blank">
        <GitHub
          className={`svg-picture svg-picture-${getColorTheme(isDarkThemeOff)}`}
        />
      </a>
      <p>@Copyright 2022 Kolasava M.</p>
    </nav>
  );
}

export default Footer;
