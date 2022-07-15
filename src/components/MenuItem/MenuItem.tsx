import React from "react";

interface MenuItemProps {
  item: string;
}

export default function MenuItem(props: MenuItemProps) {
  return <li data-testid="menu-item">{props.item}</li>;
}
