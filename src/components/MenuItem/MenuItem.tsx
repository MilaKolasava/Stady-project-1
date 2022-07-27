import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import "./MenuItem.css";

interface MenuItemProps {
  title: string;
  path: string;
}

function MenuItem(props: MenuItemProps) {
  const intl = useIntl();

  return (
    <Link className="navigation-link" to={props.path}>
      <li data-testid="menu-item">{intl.formatMessage({ id: props.title })}</li>
    </Link>
  );
}

export default MenuItem;
