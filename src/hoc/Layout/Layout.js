import React, { Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import { animateScroll as scroll } from "react-scroll";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Toolbar disappear={this.props.disappear} />
        <main className={classes.Content}>{this.props.children}</main>
        <i
          className={`icon-up-big ${classes.BackToTop}`}
          onClick={scroll.scrollToTop}
        />
      </div>
    );
  }
}

export default Layout;
