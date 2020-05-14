import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "aos/dist/aos.css";

const toolbar = (props) => {
  return (
    <header
      data-aos="fade"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-in"
      className={classes.Toolbar}
    >
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
