import React from "react";

const instagramPost = (props) => {
  return (
    <div
      id={props.id}
      onClick={() => props.click(props.id)}
      onMouseEnter={() => props.hover(props.id)}
      className={props.classList}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    ></div>
  );
};
export default instagramPost;
