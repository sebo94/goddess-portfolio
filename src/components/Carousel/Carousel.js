import React from "react";
import Slider from "infinite-react-carousel";
import Testimonial from "../Testimonial/Testimonial";
import classes from "./Carousel.module.css";
import testimonialsData from "./data";

const carousel = () => {
  const settings = { autoplay: true, arrows: false };
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
};

export default carousel;
