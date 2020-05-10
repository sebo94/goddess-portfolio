import React from "react";
import classes from "./NavigationItem.module.css";
import { Link } from "react-scroll";

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Link
        className={classes.Link}
        activeClass={classes.Active}
        to={props.children}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default navigationItem;
