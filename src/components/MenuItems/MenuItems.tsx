import React from "react";
import MenuItem from "../MenuItem/MenuItem";

interface MenuItemsProps {
  items: Array<string>;
}

export default function MenuItems(props: MenuItemsProps) {
  return (
    <ul className="list-navigation">
      {props.items.map((item) => (
        <MenuItem item={item} />
      ))}
    </ul>
  );
}
