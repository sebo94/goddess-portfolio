import React from "react";
import Counter from "./Counter/Counter";
import classes from "./Counters.module.css";
import countersData from "./data.js";

const counters = (props) => (
  <div className={classes.Counters}>
    {countersData.map((counter) => (
      <Counter key={counter.label} value={counter.value} label={counter.label} />
    ))}
  </div>
);

export default counters;
