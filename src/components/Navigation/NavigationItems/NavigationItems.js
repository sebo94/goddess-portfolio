import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const links = ["home", "about", "projects", "services", "contact"];
  return (
    <ul className={classes.NavigationItems}>
      {links.map((link) => {
        return <NavigationItem>{link}</NavigationItem>;
      })}
    </ul>
  );
};

export default navigationItems;
