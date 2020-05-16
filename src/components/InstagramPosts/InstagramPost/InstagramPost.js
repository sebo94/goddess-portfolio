import React from "react";
import imgSrc from '../../../assets/images/projects/project2.jpg';

const instagramPost = (props) => {
  return (
    // <div
    //   id={props.id}
    //   onClick={() => props.click(props.id)}
    //   onMouseEnter={() => props.hover(props.id)}
    //   className={props.classList}
    // >
    //   <img alt="fuck you" src={props.imgUrl}/>
    // </div>
    <div
      id={props.id}
      onClick={() => props.click(props.id)}
      onMouseEnter={() => props.hover(props.id)}
      className={props.classList}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
    </div>
  );
};
export default instagramPost;
