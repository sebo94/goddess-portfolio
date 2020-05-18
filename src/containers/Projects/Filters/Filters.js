import React from "react";
import Button from "../../../components/Button/Button";
import classes from "./Filters.module.css";
import { buttons } from "../data";

const filters = (props) => (
  <div className={classes.Filters}>
    {buttons.map((button) => (
      <Button
        animation={button.animation}
        clicked={props.click}
        filter={button.filter}
      >
        {button.label}
      </Button>
    ))}
  </div>
);

export default filters;
