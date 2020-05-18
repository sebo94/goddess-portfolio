import React from "react";
import Icon from "../Icon/Icon";
import classes from "./Follow.module.css";
import icons from "./data";

const follow = () => (
  <div
    data-aos="fade-up"
    data-aos-delay="800"
    data-aos-duration="800"
    data-aos-easing="ease-in"
  >
    <h1 className={classes.Title}>Follow Me</h1>
    <p className={classes.Text}>Let us be social</p>
    {icons.map((icon) => (
      <Icon link={icon.link} class={icon.class} color={icon.color} />
    ))}
  </div>
);

export default follow;
