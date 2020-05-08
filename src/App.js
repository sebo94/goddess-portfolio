import React, { Component } from "react";
import "./assets/fontello/css/fontello.css";
import TrackVisibility from "./hoc/TrackVisibility/TrackVisibility";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  state = {
    inView: "",
  };
  render() {
    return (
      <Layout inView={this.state.inView}>
        <TrackVisibility onVisible={() => this.setState({inView: "home"})}>
          <div
            style={{
              width: "75%",
              height: "50vh",
              backgroundColor: "yellow",
              marginBottom: "20px",
            }}
          >
            Home
          </div>
        </TrackVisibility>

        <TrackVisibility onVisible={() => this.setState({inView: "projects"})}>
          <div
            style={{ width: "75%", height: "50vh", backgroundColor: "red" }}
          >
            Projects
          </div>
        </TrackVisibility>
      </Layout>
    );
  }
}

export default App;
