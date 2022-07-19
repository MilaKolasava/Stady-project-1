import React from "react";
import "./Footer.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin-icon.svg";
import { ReactComponent as GitHub } from "../../assets/github-icon.svg";

function Footer() {
  return (
    <nav className="wrapper" id="footer" data-testid="footer-wrapper">
      <a href="http://www.linkedin.com/in/luydmila-kolasava-1940a01b0">
        <LinkedIn className="svg-picture" />
      </a>
      <a href="https://github.com/MilaKolasava">
        <GitHub className="svg-picture" />
      </a>
      <p>@Copyright 2022 Kolasava M.</p>
    </nav>
  );
}

export default Footer;
