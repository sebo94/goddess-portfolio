import React from "react";
import Follow from "../Follow/Follow";
import ContactInfos from "../ContactInfos/ContactInfos";
import AboutMe from "../AboutMe/AboutMe";
import classes from "./Footer.module.css";

const footer = () => (
  <footer
    className={classes.Footer}
    data-aos="fade"
    data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-in"
  >
    <div className={classes.Container}>
      <AboutMe />
      <ContactInfos />
      <Follow />
    </div>
  </footer>
);

export default footer;
