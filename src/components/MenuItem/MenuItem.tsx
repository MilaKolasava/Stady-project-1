import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

interface MenuItemProps {
  title: string;
  path: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link className="navigation-link" to={props.path}>
      <li data-testid="menu-item">{props.title}</li>
    </Link>
  );
}
