import React, { PureComponent } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project/Project";
import Filters from "./Filters/Filters";
import IsotopeResponseRenderer from "./IsotopeResponseRenderer/IsotopeResponseRenderer";
import classes from "./Projects.module.css";
import { projects } from "./data";

class Projects extends PureComponent {
  state = {
    filter: "",
  };
  componentDidMount() {
    Aos.init();
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
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <Filters click={this.handleFilter} />
          <IsotopeResponseRenderer filter={this.state.filter}>
            {this.renderProjects(projects)}
          </IsotopeResponseRenderer>
        </div>
      </section>
    );
  }
}

export default Projects;
