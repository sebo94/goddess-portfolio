import React from "react";
import classes from "./Project.module.css";

const Project = (props) => (
  <div className={classes.Project}>
    <h1>I am a single project</h1>
    <img
      className={classes.ProjectImage}
      src="https://source.unsplash.com/200x200"
      alt=""
    />
    <p className={classes.ProjectDescription}>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
  </div>
);

export default Project;
