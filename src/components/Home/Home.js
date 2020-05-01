import React from "react";
import classes from "./Home.module.css";
import { motion } from "framer-motion";
import imgSource from "../../assets/images/projects/project1.png";

const home = (props) => {
  const pageTransition = {
    in: { opacity: 1, scale: 1, y: 0 },
    out: { opacity: 0, scale: 0.5, y: "-100%" },
  };
  return (
    <motion.div
      className={classes.Home}
      animate="in"
      initial="out"
      variants={pageTransition}
    >
      <h1>Some title here</h1>
      <img alt="car" src={imgSource} />
    </motion.div>
  );
};

export default home;
