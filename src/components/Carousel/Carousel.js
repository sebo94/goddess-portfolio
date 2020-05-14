import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import Testimonial from "../Testimonial/Testimonial";
import classes from "./Carousel.module.css";
import testimonialsData from "./data";

class Carousel extends Component {
  componentDidMount() {
    window.addEventListener("DOMContentLoaded", () => {
      const dots = document.querySelector(".carousel-dots");
      dots.style.position = "relative";
      dots.style.left = "200px";
      dots.style.bottom = "80px";
    });
  }
  render() {
    const settings = { autoplay: true, dots: true, arrows: false };
    const testimonials = testimonialsData.map((testimonial) => (
      <Testimonial
        key={testimonial.imgAlt}
        description={testimonial.description}
        imgSrc={testimonial.imgSrc}
        name={testimonial.name}
        title={testimonial.title}
      />
    ));
    return (
      <div className={classes.Carousel}>
        <Slider {...settings}>{testimonials}</Slider>
      </div>
    );
  }
}

export default Carousel;
