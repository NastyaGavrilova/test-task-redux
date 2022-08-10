import React, { Component } from "react";
import "./_text.scss";
class Text extends Component {
  render() {
    return (
      <p className="e-paragraph" style={{ color: this.props.color }}>
        {this.props.children}
      </p>
    );
  }
}

export default Text;
