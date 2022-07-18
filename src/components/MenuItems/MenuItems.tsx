import React from "react";
import { ElementMenuInterface } from "../Header/Header.constant";
import MenuItem from "../MenuItem/MenuItem";

interface MenuItemsProps {
  items: Array<ElementMenuInterface>;
}

export default function MenuItems(props: MenuItemsProps) {
  return (
    <ul className="list-navigation" data-testid="menu-items">
      {props.items.map((item) => (
        <MenuItem title={item.title.toUpperCase()} path={item.path} />
      ))}
    </ul>
  );
}
