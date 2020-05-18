import React from "react";
import Service from "./Service/Service";
import classes from "./Services.module.css";
import servicesData from "./data";
import imgSrc from "../../assets/images/projects/project3.jpg";

const services = (props) => {
  return (
    <section
      id="services"
      className={classes.Services}
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-in"
    >
      <div className={classes.Container}>
        <div
          style={{ backgroundImage: `url(${imgSrc})` }}
          className={[classes.Column, classes.Image].join(" ")}
        ></div>
        <div className={[classes.Column, classes.Content].join(" ")}>
          <div className={classes.ContentBox}>
            <div className={classes.ContentBoxInner}>
              <h3 className={classes.Title}>What i do</h3>
              <div className={classes.Cards}>
                {servicesData.map((service) => {
                  return (
                    <Service
                      title={service.title}
                      icon={service.icon}
                      description={service.description}
                      link={service.link}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
