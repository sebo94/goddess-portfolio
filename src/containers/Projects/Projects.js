import React, { Component } from "react";
import classes from "./Projects.module.css";
import aos from "aos";

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

class Projects extends Component {
  componentDidMount() {
    aos.init();
  }
  render() {
    return (
      <div
        className={classes.Projects}
      >
        <h1>These are my projects</h1>
        <div className={classes.ProjectsContainer}>
          <ul className={classes.Categories}>
            <li
              className={[classes.Category, classes.ActiveCategory].join(" ")}
            >
              <p>All</p>
            </li>
            <li className={classes.Category}>
              <p>Watercolor</p>
            </li>
            <li className={classes.Category}>
              <p>Acrylics</p>
            </li>
            <li className={classes.Category}>
              <p>Oils</p>
            </li>
          </ul>
          <div className={classes.Grid}>
            <div
              className={classes.Project}
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <a href="www.google.com">
                <img
                  className={classes.ProjectImage}
                  src={images["project1.png"]}
                  alt=""
                />
              </a>
            </div>

            <div
              className={classes.Project}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <a href="www.google.com">
                <img
                  className={classes.ProjectImage}
                  src={images["project2.jpg"]}
                  alt=""
                />
              </a>
            </div>

            <div
              className={classes.Project}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <a href="www.google.com">
                <img
                  className={classes.ProjectImage}
                  src={images["project3.jpg"]}
                  alt=""
                />
              </a>
            </div>

            <div
              className={classes.Project}
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              <a href="www.google.com">
                <img
                  className={classes.ProjectImage}
                  src={images["project4.jpg"]}
                  alt=""
                />
              </a>
            </div>

            <div
              className={classes.Project}
              data-aos="zoom-in"
              data-aos-delay="1500"
            >
              <a href="www.google.com">
                <img
                  className={classes.ProjectImage}
                  src={images["project5.jpg"]}
                  alt=""
                />
              </a>
            </div>

            <div
              className={classes.Project}
              data-aos="fade-left"
              data-aos-delay="1800"
            >
              <a href="www.google.com">
                <img
                  className={classes.ProjectImage}
                  src={images["project6.jpg"]}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
