import React, { Component } from "react";
import classes from "./Projects.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Colcade from "colcade";

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
  state = {
    grid: null,
    colc: null,
  };
  componentDidMount() {
    Aos.init();
    this.setState({ grid: document.querySelector(`.${classes.Grid}`) }, () => {
      console.log(`.${classes.GridColumn}`, `.${classes.GridItem}`);
      const colc = new Colcade(this.state.grid, {
        columns: `.${classes.GridColumn}`,
        items: `.${classes.GridItem}`,
      });
      this.setState({ colc });
    });
  }
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
          <h1 className={classes.Title}>Projects</h1>
          <div className={classes.Grid}>
            <div
              className={[classes.GridColumn, classes.GridColumn1].join(" ")}
            ></div>
            <div
              className={[classes.GridColumn, classes.GridColumn2].join(" ")}
            ></div>
            <div
              className={[classes.GridColumn, classes.GridColumn3].join(" ")}
            ></div>
            <div
              className={[classes.GridColumn, classes.GridColumn4].join(" ")}
            ></div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
            <div className={classes.GridItem}>
              <img
                className={classes.ProjectImage}
                src={images["project1.png"]}
                alt=""
              />
            </div>
          </div>
          {/* <div className={classes.Grid}>
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
          </div> */}
        </div>
      </section>
    );
  }
}

export default Projects;
