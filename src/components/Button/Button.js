import React from "react";
import classes from "./Button.module.css";

const button = (props) => (
  <button
    data-aos={props.animation.type}
    data-aos-delay={props.animation.delay}
    data-aos-duration={props.animation.duration}
    data-aos-ease={props.animation.ease}
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={() => props.clicked(props.filter)}
  >
    {props.children}
  </button>
);

export default button;
