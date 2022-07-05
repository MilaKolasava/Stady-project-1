import React from "react";
import "./Header.css";
import { ReactComponent as Loupe } from "./loupe.svg";

function Header() {
  return (
    <div className="wrapper">
      <nav className="navigation">
        <ul className="list-navigation">
          <li>HOME</li>
          <li>BAND</li>
          <li>TOUR</li>
          <li>CONTACT</li>
          <li>MORE</li>
        </ul>
        <Loupe className="loupe" width="10" height="10" />
      </nav>
    </div>
  );
}

export default Header;
