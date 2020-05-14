import React from "react";
import classes from "./Service.module.css";

const service = (props) => (
  <div className={classes.Container}>
    <div className={classes.Service}>
      <i className={`icon-${props.icon} ${classes.Icon}`}></i>
      <h1 className={classes.Title}>{props.title}</h1>
      <p className={classes.Description}>{props.description}</p>
      <a href={props.link} className={classes.Link}>More</a>
    </div>
  </div>
);

export default service;
