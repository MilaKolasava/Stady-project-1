import React from "react";
import "./Header.css";
import { ReactComponent as Loupe } from "../../assets/loupe.svg";
import MenuItems from "../MenuItems/MenuItems";
import { MENU_ITEMS } from "./Header.constant";
import Toggle from "../Toggle/Toggle";

interface HeadersProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header(props: HeadersProps) {
  return (
    <nav className="wrapper" data-testid="header-wrapper">
      <MenuItems items={MENU_ITEMS} />
      <div className="search-and-theme">
        <Loupe
          className="loupe"
          data-testid="header-loupe"
          onClick={() => {
            props.setModalActive(true);
          }}
          width="10"
          height="10"
        />
        <Toggle />
      </div>
    </nav>
  );
}

export default Header;
