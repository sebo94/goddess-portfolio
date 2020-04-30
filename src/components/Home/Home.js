import React from "react";
import classes from "./Home.module.css";

const home = (props) => (
  <div className={classes.Home}>
    <h1>Some title here</h1>
    <img
      alt="car"
      src="https://source.unsplash.com/1600x900/"
    />
  </div>
);

export default home;
