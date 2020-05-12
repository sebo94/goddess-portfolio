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
  constructor() {
    super();
    this.filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: () => {
        let number = this.querySelectorAll(".number").text();
        return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: () => {
        let name = this.querySelectorAll(".name").text();
        return name.match(/ium$/);
      },
    };
  }
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
        filter: this.filterFns[nextProps.filter] || nextProps.filter,
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
    if (this.props.children.length > 0) {
      this.iso.arrange();
    }
  }
  componentDidUpdate(prevProps) {
    // The list of keys seen in the previous render
    let currentKeys = prevProps.children.map((n) => n.key);

    // The latest list of keys that have been rendered
    let newKeys = this.props.children.map((n) => n.key);

    // Find which keys are new between the current set of keys and any new children passed to this component
    let addKeys = newKeys.filter((x) => !currentKeys.includes(x));

    // Find which keys have been removed between the current set of keys and any new children passed to this component
    let removeKeys = currentKeys.filter((x) => !newKeys.includes(x));

    if (removeKeys.length > 0) {
      removeKeys.forEach((removeKey) =>
        this.iso.remove(document.getElementById(removeKey))
      );
      this.iso.arrange();
    }
    if (addKeys.length > 0) {
      this.iso.addItems(
        addKeys.map((addKey) => document.getElementById(addKey))
      );
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
