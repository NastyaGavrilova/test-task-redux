import React, { Component } from "react";
import logo from "../../assets/Logo.svg";
import Button from "../../elements/Button/Button";
import "./_header.scss";
class Header extends Component {
  render() {
    return (
      <header className="c-header">
        <div className="c-header__wrapper">
          <div className="c-header__logo">
            <img className="c-header__logo-img" alt="logo" src={logo}></img>
          </div>
          <div className="c-header__buttons">
            <Button children="Users" />
            <Button children="Sign Up" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
