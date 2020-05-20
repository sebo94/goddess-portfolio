import React from "react";
import goddessLogo from "../../assets/images/goddess-logo.png";
import classes from "./Logo.module.css";
import { animateScroll as scroll } from "react-scroll";

const logo = (props) => (
  <div className={classes.Logo} onClick={scroll.scrollToTop} style={props.style}>
    <img src={goddessLogo} alt="Goddess Logo" />
  </div>
);

export default logo;
