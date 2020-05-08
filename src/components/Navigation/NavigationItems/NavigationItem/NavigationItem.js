import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  console.log(props);
  const testLinkClass = props.active
    ? [classes.TestLink, classes.TestActive].join(" ")
    : [classes.TestLink];
  return (
    <li className={classes.NavigationItem}>
      <a className={testLinkClass} href="www.google.com">
        {props.children}
      </a>
      {/* <NavLink
        exact={props.exact}
        to={props.link}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink> */}
    </li>
  );
};

export default navigationItem;
