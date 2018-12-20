import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.props.changeBg("landing");
  }
  render() {
    return (
      <div className="contentContainer">
        <div className="buttons">
          <h1>B&K BEES</h1>
          <p className="tagline">have some fun with your bees</p>
          <button
            onClick={() => {
              this.props.history.push("/bees");
              this.props.changeBg("pages");
            }}
            className={"btn-1 landingButton"}
          >
            <span>Order Bees</span>
          </button>
          <button
            className={"btn-1 landingButton"}
            onClick={() => {
              this.props.history.push("/learn/videos");
              this.props.changeBg("pages");
            }}
          >
            <span>Watch Videos</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
