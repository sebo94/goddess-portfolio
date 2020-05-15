import React from "react";
import imgSrc from "../../../assets/images/projects/project2.jpg";

const instagramPost = (props) => {
  return (
    <div
      id={props.id}
      onClick={() => props.click(props.id)}
      onMouseEnter={() => props.hoverEnter(props.id)}
      onMouseLeave={() => props.hoverExit(props.id)}
      className={props.class}
      style={{ backgroundImage: `url(${imgSrc})` }}
    ></div>
  );
};
export default instagramPost;
