import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project/Project";
import IsotopeResponseRenderer from "./IsotopeResponseRenderer/IsotopeResponseRenderer";
import "./Project/Project.css";


function shallowCompare(newObj, prevObj) {
  for (let key in newObj) {
    if (newObj[key] !== prevObj[key]) return true;
  }
  return false;
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images/projects", false, /\.(png|jpe?g|svg)$/)
);

const myElements = [
  {
    name: "Mercury",
    symbol: "Hg",
    number: 80,
    weight: 200.59,
    category: "transition",
    normal: true
  },
  {
    name: "Tellurium",
    symbol: "Te",
    number: 52,
    weight: 127.6,
    category: "metalloid",
    normal: false
  },
  {
    name: "Bismuth",
    symbol: "Bi",
    number: 83,
    weight: 28.98,
    category: "metal",
    normal: true
  },
  {
    name: "Mercury",
    symbol: "Hg",
    number: 80,
    weight: 200.59,
    category: "transition",
    normal: false
  },
  {
    name: "Tellurium",
    symbol: "Te",
    number: 52,
    weight: 127.6,
    category: "metalloid",
    normal: true
  },
  {
    name: "Bismuth",
    symbol: "Bi",
    number: 83,
    weight: 28.98,
    category: "metal",
    normal: false
  },
  {
    name: "Mercury",
    symbol: "Hg",
    number: 80,
    weight: 200.59,
    category: "transition",
    normal: true
  },
  {
    name: "Tellurium",
    symbol: "Te",
    number: 52,
    weight: 127.6,
    category: "metalloid",
    normal: false
  },
  {
    name: "Bismuth",
    symbol: "Bi",
    number: 83,
    weight: 28.98,
    category: "metal",
    normal: true
  },
  {
    name: "Mercury",
    symbol: "Hg",
    number: 80,
    weight: 200.59,
    category: "transition",
    normal: false
  },
  {
    name: "Tellurium",
    symbol: "Te",
    number: 52,
    weight: 127.6,
    category: "metalloid",
    normal: true
  },
  {
    name: "Bismuth",
    symbol: "Bi",
    number: 83,
    weight: 28.98,
    category: "metal",
    normal: false
  },
  {
    name: "Mercury",
    symbol: "Hg",
    number: 80,
    weight: 200.59,
    category: "transition",
    normal: true
  },
  {
    name: "Tellurium",
    symbol: "Te",
    number: 52,
    weight: 127.6,
    category: "metalloid",
    normal: false
  },
  {
    name: "Bismuth",
    symbol: "Bi",
    number: 83,
    weight: 28.98,
    category: "metal",
    normal: true
  },
];

// Define data to drive the UI and Isotope.  This could/should be placed in a separate module.
const filterData = [
  { name: "show all", value: "*" },
  { name: "metal", value: ".metal" },
  { name: "transition", value: ".transition" },
  { name: "alkali and alkaline-earth", value: ".alkali, .alkaline-earth" },
  { name: "not transition", value: ":not(.transition)" },
  { name: "metal but not transition", value: ".metal:not(.transition)" },
  { name: "number > 50", value: "numberGreaterThan50" },
  { name: "name ends with -ium", value: "ium" },
];

class Projects extends Component {
  state = {
    filter: "",
    elements: [],
  };
  componentDidMount() {
    Aos.init();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowCompare(this.props, nextProps) ||
      !shallowCompare(this.state, nextState)
    );
  }
  renderElements(elements) {
    return elements.map((e) => <Project key={e.name} element={e}></Project>);
  }

  handleFiltering = (type) => {
    this.setState({ filter: type });
  };

  render() {
    return (
      <div>
        <h3>Filter All</h3>
        <button onClick={() => this.handleFiltering("*")}>Filter All</button>

        <h3>Filter Metal</h3>
        <button onClick={() => this.handleFiltering(".metal")}>
          Filter Metal
        </button>

        <IsotopeResponseRenderer filter={this.state.filter}>
          {this.renderElements(myElements)}
        </IsotopeResponseRenderer>
      </div>
    );
  }
}

export default Projects;
