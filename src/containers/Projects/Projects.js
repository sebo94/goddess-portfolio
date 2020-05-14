import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project/Project";
import IsotopeResponseRenderer from "./IsotopeResponseRenderer/IsotopeResponseRenderer";
import { shallowCompare } from "../../utility";
import classes from "./Projects.module.css";
import { projects } from "./data";

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
  renderProjects = (projects) => {
    return projects.map((project) => (
      <Project key={project.alt} project={project}></Project>
    ));
  };

  handleFilter = (type) => {
    this.setState({ filter: type });
  };

  render() {
    return (
      <section id="projects" className={classes.Projects}>
        <div
          className={classes.Container}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <div className={classes.Filters}>
            <button
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-easing="ease-in"
              className={classes.Button}
              onClick={() => this.handleFilter("*")}
            >
              All
            </button>
            <button
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-easing="ease-in"
              className={classes.Button}
              onClick={() => this.handleFilter(".Installation")}
            >
              Installations
            </button>
            <button
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-easing="ease-in"
              className={classes.Button}
              onClick={() => this.handleFilter(".Illustration")}
            >
              Illustrations
            </button>
            <button
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-duration="500"
              data-aos-easing="ease-in"
              className={classes.Button}
              onClick={() => this.handleFilter(".Painting")}
            >
              Paintings
            </button>
          </div>
          <IsotopeResponseRenderer filter={this.state.filter}>
            {this.renderProjects(projects)}
          </IsotopeResponseRenderer>
        </div>
      </section>
    );
  }
}

export default Projects;
