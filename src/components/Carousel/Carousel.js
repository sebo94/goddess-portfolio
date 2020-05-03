import React from "react";
import Slider from "infinite-react-carousel";
import classes from './Carousel.module.css';

const carousel = (props) => {
  const settings = {};
  return (
    <div style={{ height: "200px", width: "200px", backgroundColor: '#ccc' }}>
      <Slider {...settings}>
        <div>
          <h1>1</h1>
        </div>
        <div>
          <h1>2</h1>
        </div>
        <div>
          <h1>3</h1>
        </div>
      </Slider>
    </div>
  );
};

export default carousel;
