import React, { Component } from "react";
import "./assets/fontello/css/fontello.css";

import Layout from "./hoc/Layout/Layout";
import TrackVisibility from "./hoc/TrackVisibility/TrackVisibility";

import Home from "./components/Home/Home";
import Projects from "./containers/Projects/Projects";

class App extends Component {
  state = {
    inView: "",
    disappear: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset === 0 || window.pageYOffset > 300 ) {
      this.setState({ disappear: false });
    }
    if (window.pageYOffset > 0 && window.pageYOffset < 300) {
      this.setState({ disappear: true });
    }
  };

  render() {
    console.log(this.state.disappear);
    return (
      <Layout inView={this.state.inView} disappear={this.state.disappear}>
        <TrackVisibility onVisible={() => this.setState({ inView: "home" })}>
          <Home />
        </TrackVisibility>
        <TrackVisibility
          onVisible={() => this.setState({ inView: "projects" })}
        >
          <Projects />
        </TrackVisibility>
      </Layout>
    );
  }
}

export default App;
