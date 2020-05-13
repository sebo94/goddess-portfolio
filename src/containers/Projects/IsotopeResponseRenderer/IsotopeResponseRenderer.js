import React from "react";
import ReactDOM from "react-dom";
import Isotope from "isotope-layout";
import "../Project/Project.css";

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function shallowCompare(newObj, prevObj) {
  for (let key in newObj) {
    if (newObj[key] !== prevObj[key]) return true;
  }
  return false;
}

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
      itemSelector: ".element-item",
      layoutMode: "masonry",
      masonry: {
        columnWidth: ".element-item-sizer",
      },
    };
    this.createIsotopeContainer();

    // Only arrange if there are elements to arrange
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
      <div className="isotope" ref="isotopeContainer">
        <div className="element-item-sizer"></div>
        {this.props.children}
      </div>
    );
  }
}

export default IsotopeResponseRenderer;
