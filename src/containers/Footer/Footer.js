import React, { PureComponent } from "react";
import Follow from "../../components/Follow/Follow";
import ContactInfos from "../../components/ContactInfos/ContactInfos";
import AboutMe from "../../components/AboutMe/AboutMe";
import classes from "./Footer.module.css";

class Footer extends PureComponent {
  render() {
    return (
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
  }
}

export default Footer;
