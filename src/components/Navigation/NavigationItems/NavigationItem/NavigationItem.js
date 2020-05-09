import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  const testLinkClass = props.active
    ? [classes.TestLink, classes.TestActive].join(" ")
    : [classes.TestLink];
  return (
    <li className={classes.NavigationItem}>
      <a className={testLinkClass} href="www.google.com">
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
