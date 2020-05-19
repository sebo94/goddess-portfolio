import React, { PureComponent } from "react";
import Form from "./Form/Form";
import classes from "./Contact.module.css";
import imgSrc from "../../assets/images/projects/project4.jpg";

class Contact extends PureComponent {
  render() {
    return (
      <section
        id="contact"
        className={classes.Contact}
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        <div className={[classes.Column, classes.Content].join(" ")}>
          <div className={classes.ContentBox}>
            <div className={classes.ContentBoxInner}>
              <h3 className={classes.Title}>Contact me</h3>
              <Form />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${imgSrc})` }}
          className={[classes.Column, classes.Image].join(" ")}
        ></div>
      </section>
    );
  }
}

export default Contact;
