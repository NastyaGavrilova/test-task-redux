import React, { Component } from "react";
import Banner from "../Banner/Banner";
import GetUsers from "../GetUsers/GetUsers";
import "./_main.scss";
class Main extends Component {
  render() {
    return (
      <div className="c-main">
        <Banner />
        <GetUsers />
      </div>
    );
  }
}

export default Main;
