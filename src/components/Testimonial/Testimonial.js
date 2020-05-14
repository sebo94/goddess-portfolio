import React from "react";
import classes from "./Testimonial.module.css";

const testimonial = (props) => (
  <div className={classes.Testimonial}>
    <p className={classes.Description}>{props.description}</p>
    <div className={classes.ImageContainer}>
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className={classes.Image}
      ></img>
    </div>
    <div className={classes.AuthorInfo}>
      <h3 className={classes.Name}>{props.name}</h3>
      <p className={classes.Title}>{props.title}</p>
    </div>
  </div>
);

export default testimonial;
