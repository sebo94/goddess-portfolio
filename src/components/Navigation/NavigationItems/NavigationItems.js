import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const links = ["home, projects, shop, about"];
  console.log(props.active)
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        home
      </NavigationItem>
      <NavigationItem link="/projects">projects</NavigationItem>
      <NavigationItem link="/shop">shop</NavigationItem>
      <NavigationItem link="/about">about</NavigationItem>
    </ul>
  );
};

export default navigationItems;
