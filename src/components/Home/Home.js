import React from "react";
import { Parallax } from "react-parallax";

import Aos from "aos";
import "aos/dist/aos.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images/home", false, /\.(png|jpe?g|svg)$/)
);

const home = (props) => {
  return (
    <section
      id="home"
      data-aos="fade"
      data-aos-delay="200"
      data-aos-duration="300"
      data-aos-easing="ease-in"
    >
      <Parallax
        bgImage={images["home-1.jpeg"]}
        bgImageStyle={{ top: "-200px" }}
        strength={500}
      >
        <div style={{ height: "100vh" }}></div>
      </Parallax>
    </section>
  );
};

export default home;
