import React, { Component } from "react";
import "./Project.css";
import {shallowCompare, assignHeight} from '../../../utility';

class Project extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowCompare(this.props, nextProps);
  }
  render() {
    const primaryClass = assignHeight(this.props.element.height); 
    
    return (
      <div
        id={this.props.element.alt}
        className={`element-item ${primaryClass} ${this.props.element.category}`}
        data-category={this.props.element.category}
      >
        <img src={this.props.element.source} alt={this.props.element.alt} />
      </div>
    );
  }
}

export default Project;
