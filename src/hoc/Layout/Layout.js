import React, { Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
