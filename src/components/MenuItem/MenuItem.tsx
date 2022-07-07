import React from "react";

interface MenuItemProps {
  item: string;
}

export default function MenuItem(props: MenuItemProps) {
  return <li>{props.item}</li>;
}
