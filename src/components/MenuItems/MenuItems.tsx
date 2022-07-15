import React from "react";
import MenuItem from "../MenuItem/MenuItem";

interface MenuItemsProps {
  items: Array<string>;
}

export default function MenuItems(props: MenuItemsProps) {
  return (
    <ul className="list-navigation" data-testid="menu-items">
      {props.items.map((item) => (
        <MenuItem item={item.toUpperCase()} />
      ))}
    </ul>
  );
}
