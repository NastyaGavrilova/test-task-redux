import React, { Component } from "react";
import "./_button.scss";

class Button extends Component {
  render() {
    return (
      <a
        id={this.props.id}
        className="e-button"
        onClick={this.props.onClick}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Button;
