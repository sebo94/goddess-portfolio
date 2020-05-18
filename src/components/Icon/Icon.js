import React from "react";

const followIcon = (props) => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    <i className={props.class} style={{color: props.color}}></i>
  </a>
);

export default followIcon;
