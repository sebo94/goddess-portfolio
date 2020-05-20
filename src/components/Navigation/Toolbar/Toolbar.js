import React, { Component } from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import "aos/dist/aos.css";

class Toolbar extends Component {
  state = { opacity: 0 };
  componentDidMount() {
    this.setState({ opacity: 1 });
  }
  render() {
    const opacity = this.state.opacity;
    const classNames = this.props.transparent
      ? [classes.Toolbar]
      : [classes.Toolbar, classes.Solid].join(" ");
    return (
      <header style={{ opacity }} className={classNames}>
        <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <Logo />
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
