import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as Loupe } from "../../assets/loupe.svg";
import MenuItems from "../MenuItems/MenuItems";
import { MENU_ITEMS } from "./Header.constant";
import Toggle from "../Toggle/Toggle";
import getColorTheme from "../../utils/getColorTheme";
import { LOCALES } from "../../i18n/Locales";

interface HeadersProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDarkThemeOff: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkThemeOff: boolean;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
}

function Header(props: HeadersProps) {
  return (
    <nav
      className={`wrapper wrapper-${getColorTheme(props.isDarkThemeOff)}`}
      data-testid="header-wrapper"
    >
      <MenuItems items={MENU_ITEMS} />
      <div className="search-and-theme">
        <Loupe
          className={`loupe loupe-${getColorTheme(props.isDarkThemeOff)}`}
          data-testid="header-loupe"
          onClick={() => {
            props.setModalActive(true);
          }}
          width="10"
          height="10"
        />
        <Toggle
          setIsDarkThemeOff={props.setIsDarkThemeOff}
          isDarkThemeOff={props.isDarkThemeOff}
        />
        <button onClick={() => props.setLocale(LOCALES.ENGLISH)}>EN</button>
        <button onClick={() => props.setLocale(LOCALES.POLISH)}>PL</button>
        <button onClick={() => props.setLocale(LOCALES.BELARUSIAN)}>BY</button>
      </div>
    </nav>
  );
}

export default Header;
