import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/fontello/css/fontello.css";
import { InView } from "react-intersection-observer";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Projects from "./containers/Projects/Projects";
import Project from "./containers/Projects/Project/Project";
import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel";

class App extends Component {
  state = {
    inView: "",
  };
  render() {
    return (
      <Layout inView={this.state.inView}>
        <InView
          as="div"
          onChange={(inView, entry) => this.setState({ inView: "home" })}
        >
          <div
            style={{
              width: "75%",
              height: "100vh",
              backgroundColor: "yellow",
              marginBottom: "20px",
            }}
          >
            Home
          </div>
        </InView>
        <InView
          as="div"
          onChange={(inView, entry) => this.setState({ inView: "work" })}
        >
          <div
            style={{ width: "75%", height: "100vh", backgroundColor: "red" }}
          >
            Work
          </div>
        </InView>
        {/* <Switch>
          <Route path="/projects/:id" component={Project} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Carousel} />
          <Route path="/" exact component={Home} />
        </Switch> */}
      </Layout>
    );
  }
}

export default App;
