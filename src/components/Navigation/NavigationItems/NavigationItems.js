import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const links = ["home", "projects", "shop", "about"];
  return (
    <ul className={classes.NavigationItems}>
      {links.map((link) => {
        let active = false;
        if (props.active === link) {
          active = true;
        }
        const path = link === "home" ? "/" : link;
        const exact = link === "home" ? true : false;
        return (
          <NavigationItem link={path} exact={exact} active={active}>
            {link}
          </NavigationItem>
        );
      })}
    </ul>
  );
};

export default navigationItems;
