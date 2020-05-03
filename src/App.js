import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/fontello/css/fontello.css";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Projects from "./containers/Projects/Projects";
import Project from "./containers/Projects/Project/Project";
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/projects/:id" component={Project} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Carousel} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
