import React from "react";
import "./Header.css";
import { ReactComponent as Loupe } from "../../assets/loupe.svg";
import MenuItems from "../MenuItems/MenuItems";
import { MENU_ITEMS } from "./Header.constant";

function Header(props: { setModalActive: (arg0: boolean) => void }) {
  return (
    <nav className="wrapper">
      <MenuItems items={MENU_ITEMS} />
      <Loupe
        className="loupe"
        onClick={() => {
          props.setModalActive(true);
        }}
        width="10"
        height="10"
      />
    </nav>
  );
}

export default Header;
