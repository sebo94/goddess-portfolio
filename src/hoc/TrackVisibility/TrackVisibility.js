import React, { Component } from "react";

class TrackVisibility extends Component {
  ref = React.createRef();

  async componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          // Item is fully visible
          this.props.onVisible();
          if (entry.target.firstChild.id === "home") {
            // Home intersects
            this.props.intersecting(true);
          }
        } else {
          if (entry.target.firstChild.id === "home") {
            // Home does not intersect
            this.props.intersecting(false);
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );
    if (this.ref.current) {
      observer.observe(this.ref.current);
    }
  }
  render() {
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}

export default TrackVisibility;
