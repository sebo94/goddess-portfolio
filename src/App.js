import React, { Component, Suspense } from "react";
import "./assets/fontello/css/fontello.css";

import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Spinner from "./components/Spinner/Spinner";
import TrackVisibility from "./hoc/TrackVisibility/TrackVisibility";

const Projects = React.lazy(() => import("./containers/Projects/Projects"));
const About = React.lazy(() => import("./containers/About/About"));
const Services = React.lazy(() => import("./containers/Services/Services"));
const Contact = React.lazy(() => import("./containers/Contact/Contact"));
const Footer = React.lazy(() => import("./containers/Footer/Footer"));
const InstagramPosts = React.lazy(() =>
  import("./containers/InstagramPosts/InstagramPosts")
);

class App extends Component {
  state = {
    homeIntersecting: true,
    home: false,
    projects: false,
    about: false,
    services: false,
    contact: false,
    footer: false,
    posts: false,
  };

  handleVisibility = (component) => {
    const newState = {};
    newState[component] = true;
    this.setState(newState);
  };

  handleHomeIntersecting = (param) => {
    this.setState({ homeIntersecting: param });
  };

  render() {
    return (
      <Layout transparent={this.state.homeIntersecting}>
        <TrackVisibility
          onVisible={() => this.handleVisibility("home")}
          intersecting={this.handleHomeIntersecting}
        >
          <Home />
        </TrackVisibility>

        {this.state.home && (
          <TrackVisibility onVisible={() => this.handleVisibility("projects")}>
            <Suspense fallback={<Spinner />}>
              <Projects />
            </Suspense>
          </TrackVisibility>
        )}

        {this.state.projects && (
          <TrackVisibility onVisible={() => this.handleVisibility("about")}>
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          </TrackVisibility>
        )}

        {this.state.about && (
          <TrackVisibility onVisible={() => this.handleVisibility("services")}>
            <Suspense fallback={<Spinner />}>
              <Services />
            </Suspense>
          </TrackVisibility>
        )}

        {this.state.services && (
          <TrackVisibility onVisible={() => this.handleVisibility("contact")}>
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          </TrackVisibility>
        )}

        {this.state.contact && (
          <TrackVisibility onVisible={() => this.handleVisibility("footer")}>
            <Suspense fallback={<Spinner />}>
              <Footer />
            </Suspense>
          </TrackVisibility>
        )}

        {this.state.footer && (
          <TrackVisibility onVisible={() => this.handleVisibility("posts")}>
            <Suspense fallback={<Spinner />}>
              <InstagramPosts />
            </Suspense>
          </TrackVisibility>
        )}
      </Layout>
    );
  }
}

export default App;
