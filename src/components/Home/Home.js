import React from "react";
import classes from "./Home.module.css";
import { Parallax } from "react-parallax";

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
    <div className={classes.Home}>
      <Parallax bgImage={images["home-1.jpeg"]} bgImageStyle={{top: '-200px'}} strength={500}>
        <div style={{ height: "100vh" }}></div>
      </Parallax>
    </div>
  );
};

export default home;
