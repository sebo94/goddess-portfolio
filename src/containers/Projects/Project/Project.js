import React, { Component } from "react";
import classes from "./Project.module.css";
import { shallowCompare, assignHeight } from "../../../utility";

class Project extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowCompare(this.props, nextProps);
  }
  render() {
    const size = assignHeight(this.props.project.height, classes);
    return (
      <div
        id={this.props.project.alt}
        className={`${classes.Project} ${size} ${this.props.project.category}`}
        data-category={this.props.project.category}
      >
        <span className={classes.Info}>Project Name</span>
        <img
          src={this.props.project.source}
          alt={this.props.project.alt}
          className={classes.Image}
        />
      </div>
    );
  }
}

export default Project;
