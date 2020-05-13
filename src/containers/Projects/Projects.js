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
    source: `${images["project1.png"]}`,
    alt: "alt1",
    href: "https://www.google.com",
    category: "installations",
    height: "xl",
  },
  {
    source: `${images["project2.jpg"]}`,
    alt: "alt2",
    href: "https://www.google.com",
    category: "painting",
    height: "xs",
  },
  {
    source: `${images["project3.jpg"]}`,
    alt: "alt3",
    href: "https://www.google.com",
    category: "illustration",
    height: "s",
  },
  {
    source: `${images["project4.jpg"]}`,
    alt: "alt4",
    href: "https://www.google.com",
    category: "painting",
    height: "m",
  },
  {
    source: `${images["project5.jpg"]}`,
    alt: "alt5",
    href: "https://www.google.com",
    category: "illustration",
    height: "l",
  },
  {
    source: `${images["project6.jpg"]}`,
    alt: "alt6",
    href: "https://www.google.com",
    category: "installation",
    height: "xs",
  },
];

class Projects extends Component {
  state = {
    filter: "",
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
  // You could do a method like this for every map render
  renderElements(elements) {
    return elements.map((e) => <Project key={e.alt} element={e}></Project>);
  }

  handleFiltering = (type) => {
    this.setState({ filter: type });
  };

  render() {
    return (
      <div>
        <h3>Filter All</h3>
        <button onClick={() => this.handleFiltering("*")}>Filter</button>

        <h3>Filter Illustrations</h3>
        <button onClick={() => this.handleFiltering(".illustration")}>
          Filter
        </button>

        <IsotopeResponseRenderer filter={this.state.filter}>
          {this.renderElements(myElements)}
        </IsotopeResponseRenderer>
      </div>
    );
  }
}

export default Projects;
