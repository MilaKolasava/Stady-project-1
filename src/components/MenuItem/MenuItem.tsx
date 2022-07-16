import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  item: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link to="/about">
      <li data-testid="menu-item">{props.item}</li>
    </Link>
  );
}
