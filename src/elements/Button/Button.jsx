import React, { Component } from "react";
import "./_button.scss";

class Button extends Component {
  render() {
    return (
      <button className="e-button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
