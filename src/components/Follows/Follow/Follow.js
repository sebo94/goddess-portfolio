import React from "react";
import classes from "./Follow.module.css";

const follow = (props) => {
    console.log(props)
  return (
    <div>
      <a href={props.link}>
        <i className={[props.class, classes.Icon].join(" ")} />
      </a>
    </div>
  );
};

export default follow;
