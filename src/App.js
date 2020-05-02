import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Projects from "./containers/Projects/Projects";
import Project from "./containers/Projects/Project/Project";

class App extends Component {
  render() {
    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Switch
            location={this.props.location}
            key={this.props.location.pathname}
          >
            <Route path="/projects/:id" component={Project} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/" exact component={Home} />
          </Switch>
        </AnimatePresence>
      </Layout>
    );
  }
}

export default withRouter(App);
