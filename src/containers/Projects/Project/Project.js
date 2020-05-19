import React, { Component } from "react";
import Icon from "../../../components/Icon/Icon";
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
        <div className={classes.Infos}>
          <div className={classes.Icon}>
            <Icon link="" class="icon-plus" color="#eee" />
          </div>
          <span className={classes.Name}>Project Name</span>
        </div>

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
