import React from "react";
import ReactDOM from "react-dom";
import Isotope from "isotope-layout";
import classes from "../Project/Project.module.css";
import { arraysEqual, shallowCompare } from "../../../utility";

class IsotopeResponseRenderer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowCompare(this.props, nextProps) ||
      !shallowCompare(this.state, nextState)
    );
  }
  // Filter and sort are coming from the Parent.
  componentWillReceiveProps(nextProps) {
    if (nextProps.filter && !arraysEqual(nextProps.filter, this.props.filter)) {
      this.iso.arrange({
        filter: nextProps.filter,
      });
    }
  }

  componentDidMount() {
    this.isoOptions = {
      itemSelector: `.${classes.Project}`,
      layoutMode: "masonry",
      masonry: {
        columnWidth: `.${classes.Sizer}`,
      },
    };
    this.createIsotopeContainer();

    if (this.props.children.length > 0 && this.iso != null) {
      this.iso.arrange();
    }
  }

  componentWillUnmount() {
    if (this.iso != null) {
      this.iso.destroy();
    }
  }

  createIsotopeContainer() {
    if (this.iso == null) {
      this.iso = new Isotope(
        ReactDOM.findDOMNode(this.refs.isotopeContainer),
        this.isoOptions
      );
    }
  }

  render() {
    return (
      <div className={classes.Isotope} ref="isotopeContainer">
        <div className={classes.Sizer}></div>
        {this.props.children}
      </div>
    );
  }
}

export default IsotopeResponseRenderer;
