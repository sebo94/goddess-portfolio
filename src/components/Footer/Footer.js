import React from "react";
import Follows from '../Follows/Follows';
import classes from "./Footer.module.css";

const footer = (props) => (
  <footer id="footer" className={classes.Footer}>
       <div className={classes.Container}>
           <Follows />
       </div>
  </footer>
);

export default footer;
