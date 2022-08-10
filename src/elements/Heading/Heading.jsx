import React, { Component } from "react";
import "./_heading.scss";
class Heading extends Component {
  render() {
    return (
      <h1 className="e-heading1" style={{ color: this.props.color }}>
        {this.props.children}
      </h1>
    );
  }
}

export default Heading;
