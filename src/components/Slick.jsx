import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      speed: 200,
      variableWidth: true,
      slidesToScroll: 1,
      infinite: false,
      initalSlide: 0,
    };
    return (
      <div>
        <div className="d-none d-md-flex align-items-center justify-content-between mb-2">
          <IconButton size="small" onClick={this.previous}>
            <ArrowBack />
          </IconButton>
          <IconButton size="small" onClick={this.next}>
            <ArrowForward />
          </IconButton>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}
