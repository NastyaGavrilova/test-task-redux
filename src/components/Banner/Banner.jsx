import React, { Component } from "react";
import Button from "../../elements/Button/Button";
import Heading from "../../elements/Heading/Heading";
import Text from "../../elements/Text/Text";
import "./_banner.scss";

class Banner extends Component {
  render() {
    return (
      <section className="c-banner">
        <div className="c-banner__wrapper">
          <div className="c-banner__group">
            <div className="c-banner__frame">
              <div className="c-banner__title">
                <Heading
                  color=" #FFFFFF"
                  children="Test assignment for front-end developer"
                />
              </div>
              <div className="c-banner__text">
                <Text
                  color=" #FFFFFF"
                  children="What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
                />
              </div>
            </div>
            <Button children="Sign Up" />
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
