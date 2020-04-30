import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Projects from './containers/Projects/Projects';
import Project from './containers/Projects/Project/Project';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/projects/:id"  component={Project} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
