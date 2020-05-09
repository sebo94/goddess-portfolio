import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => {
  console.log(props.disappear);
  const hide = props.disappear ? { display: "none" } : {}
  return (
    <header className={classes.Toolbar} style={hide}>
      <Logo />
      <nav>
        <NavigationItems active={props.active} />
      </nav>
    </header>
  );
};

export default toolbar;
