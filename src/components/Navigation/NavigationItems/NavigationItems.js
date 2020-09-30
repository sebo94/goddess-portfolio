import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const links = ["home", "projects", "about", "services"];
  return (
    <ul className={classes.NavigationItems}>
      {links.map((link) => {
        return <NavigationItem key={link}>{link}</NavigationItem>;
      })}
    </ul>
  );
};

export default navigationItems;
