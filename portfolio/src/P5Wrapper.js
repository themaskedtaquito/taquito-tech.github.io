import React, { Component } from "react";
import PropTypes from "prop-types";

import sketch from "./sketch.js";

class P5Wrapper extends Component {

  componentDidMount() {
    this.canvas = new window.p5(sketch, "app-p5_container");
    this.canvas.setOnReady(this.props.onReady);
  }

  componentWillReceiveProps(nextProps) {
    this.canvas.pushProps(nextProps);
  }

  shouldComponentUpdate() { 
    return false;
  }

  componentWillUnmount() {
    console.log("unmount");
    this.canvas.remove();
  }

  render() {
    return (
      <div
        id="app-p5_container"
        style={{ width: "20%", textAlign: "center" }}
      />
    );
  }
}

export default P5Wrapper;
