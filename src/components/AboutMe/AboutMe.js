import React from "react";
import Icon from "../Icon/Icon";
import classes from "./AboutMe.module.css";

const aboutMe = () => (
  <div
    className={classes.AboutMe}
    data-aos="fade-up"
    data-aos-delay="400"
    data-aos-duration="800"
    data-aos-easing="ease-in"
  >
    <h1 className={classes.Title}>About Me</h1>
    <p className={classes.Text}>
      This is some content about me. Please remember to modify me later Please
      remember to modify me later{" "}
    </p>
    <p className={classes.Text}>
      Copyright ©2020 All rights reserved | This template is made with{" "}
      <Icon
        link={"https://github.com/sebo94"}
        class={"icon-heart"}
        color={"#eee"}
      ></Icon>{" "}
      by
      <a
        className={classes.Link}
        href="https://github.com/sebo94"
        style={{ marginLeft: "8px" }}
      >
        Kapta
      </a>
    </p>
  </div>
);

export default aboutMe;
