import React, { Component } from "react";
import "./Project.css";

function shallowCompare(newObj, prevObj) {
  for (let key in newObj) {
    if (newObj[key] !== prevObj[key]) return true;
  }
  return false;
}

class Project extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowCompare(this.props === nextProps);
  }
  render() {
    const primaryClass = this.props.element.normal ? "element-item1" : ""; 
    return (
      <div
        id={this.props.element.name}
        className={`element-item ${primaryClass} ${this.props.element.category}`}
        data-category={this.props.element.category}
      >
        <h3 className="name">{this.props.element.name}</h3>
        <p className="symbol">{this.props.element.symbol}</p>
        <p className="number">{this.props.element.number}</p>
        <p className="weight">{this.props.element.weight}</p>
      </div>
    );
  }
}

export default Project;
