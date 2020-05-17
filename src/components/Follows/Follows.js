import React from "react";
import Follow from "./Follow/Follow";
import classes from "./Follows.module.css";
import icons from "./data";

const follows = (props) => (
  <div>
    <h1 className={classes.Title}>Follow me</h1>
    <div className={classes.Icons}>
      {icons.map((icon) => (
        <Follow link={icon.link} class={icon.class} />
      ))}
    </div>
  </div>
);

export default follows;
