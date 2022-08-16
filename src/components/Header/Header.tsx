import React, { useContext } from "react";
import "./Header.css";
import { ReactComponent as Storage } from "../../assets/source_repository_icon.svg";
import MenuItems from "../MenuItems/MenuItems";
import { MENU_ITEMS } from "./Header.constant";
import Toggle from "../Toggle/Toggle";
import getColorTheme from "../../utils/getColorTheme";
import ButtonLang from "../ButtonLang/ButtonLang";
import ThemeContext from "../ThemeContext/ThemeContext";

interface HeadersProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  locale: string;
}

function Header(props: HeadersProps) {
  const { isDarkThemeOff, setIsDarkThemeOff } = useContext(ThemeContext);

  return (
    <nav
      className={`wrapper wrapper-${getColorTheme(isDarkThemeOff)}`}
      data-testid="header-wrapper"
    >
      <MenuItems items={MENU_ITEMS} />
      <div className="search-and-theme">
        <Storage
          className={`storage storage-${getColorTheme(isDarkThemeOff)}`}
          data-testid="header-storage"
          onClick={() => {
            props.setModalActive(true);
          }}
          width="10"
          height="10"
        />
        <Toggle
          setIsDarkThemeOff={setIsDarkThemeOff}
          isDarkThemeOff={isDarkThemeOff}
        />
        <ButtonLang setLocale={props.setLocale} locale={props.locale} />
      </div>
    </nav>
  );
}

export default Header;
