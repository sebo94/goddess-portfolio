import React, { Component } from "react";
import classes from "./Projects.module.css";
import { Link } from "react-router-dom";
import aos from "aos";
import { motion } from "framer-motion";

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
    const pageTransition = {
      in: { opacity: 1, scale: 1, y: 0 },
      out: { opacity: 0, scale: 0.5, y: "-100%" },
    };
    return (
      <motion.div
        className={classes.Projects}
        animate="in"
        initial="out"
        variants={pageTransition}
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
              <Link to="/projects/1">
                <img
                  className={classes.ProjectImage}
                  src={images["project1.png"]}
                  alt=""
                />
              </Link>
            </div>

            <div
              className={classes.Project}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <Link to="/projects/1">
                <img
                  className={classes.ProjectImage}
                  src={images["project2.jpg"]}
                  alt=""
                />
              </Link>
            </div>

            <div
              className={classes.Project}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <Link to="/projects/1">
                <img
                  className={classes.ProjectImage}
                  src={images["project3.jpg"]}
                  alt=""
                />
              </Link>
            </div>

            <div
              className={classes.Project}
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              <Link to="/projects/1">
                <img
                  className={classes.ProjectImage}
                  src={images["project4.jpg"]}
                  alt=""
                />
              </Link>
            </div>

            <div
              className={classes.Project}
              data-aos="zoom-in"
              data-aos-delay="1500"
            >
              <Link to="/projects/1">
                <img
                  className={classes.ProjectImage}
                  src={images["project5.jpg"]}
                  alt=""
                />
              </Link>
            </div>

            <div
              className={classes.Project}
              data-aos="fade-left"
              data-aos-delay="1800"
            >
              <Link to="/projects/1">
                <img
                  className={classes.ProjectImage}
                  src={images["project6.jpg"]}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Projects;
