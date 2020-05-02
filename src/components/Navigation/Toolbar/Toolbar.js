import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Follow from '../../Follow/Follow';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
    <Follow />
  </header>
);

export default toolbar;
