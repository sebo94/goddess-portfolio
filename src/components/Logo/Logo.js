import React from "react";
import goddessLogo from "../../assets/images/goddess-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={goddessLogo} alt="Goddess Logo" />
  </div>
);

export default logo;
