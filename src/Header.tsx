import React from "react";
import "./Header.css";
import { ReactComponent as Loupe } from "./loupe.svg";

function Header() {
  return (
    <nav className="wrapper">
      <ul className="list-navigation">
        <li>HOME</li>
        <li>BAND</li>
        <li>TOUR</li>
        <li>CONTACT</li>
        <li>MORE</li>
      </ul>
      <Loupe className="loupe" width="10" height="10" />
    </nav>
  );
}

export default Header;
