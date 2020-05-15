import React, { Component } from "react";
import "./assets/fontello/css/fontello.css";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./containers/Projects/Projects";
import Services from "./components/Services/Services";
import InstagramPosts from './components/InstagramPosts/InstagramPosts';

class App extends Component {
  // state = {
  //   disappear: false,
  // };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (window.pageYOffset === 0 || window.pageYOffset > 300) {
  //     this.setState({ disappear: false });
  //   }
  //   if (window.pageYOffset > 0 && window.pageYOffset < 300) {
  //     this.setState({ disappear: true });
  //   }
  // };

  render() {
    return (
      <Layout>
        <Home />
        <Projects />
        <About />
        <Services />
        <InstagramPosts />
      </Layout>
    );
  }
}

export default App;
