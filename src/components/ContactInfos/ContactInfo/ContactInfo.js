import React from "react";
import Icon from "../../Icon/Icon";
import classes from "./ContactInfo.module.css";

const contactInfo = (props) => (
  <div className={classes.ContactInfo}>
    <Icon link={props.link} class={props.class} color={props.color} />
    <p className={classes.Text} style={{ display: "inline-block" }}>{props.text}</p>
  </div>
);

export default contactInfo;
