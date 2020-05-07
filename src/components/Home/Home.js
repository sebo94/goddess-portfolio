import React from "react";
import classes from "./Home.module.css";
import imgSource from "../../assets/images/projects/project1.png";

const home = (props) => {
  return (
    <div className={classes.Home}>
      <h1>Some title here</h1>
      <img alt="" src={imgSource} />
    </div>
  );
};

export default home;
