import React, { Component } from "react";
import classes from "./Counter.module.css";

class Counter extends Component {
  state = {
    value: 0,
  };

  componentDidUpdate() {
    if (this.state.value === this.props.value) {
      clearInterval(this.intervalID);
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.handleCount(),
      2000 / this.props.value
    );
  }

  handleCount = () => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  render() {
    return (
      <div className={classes.Counter}>
        <span className={classes.Value} onChange={this.handleCount}>
          {this.state.value}
        </span>
        <h5 className={classes.Title}>{this.props.label}</h5>
      </div>
    );
  }
}

export default Counter;
