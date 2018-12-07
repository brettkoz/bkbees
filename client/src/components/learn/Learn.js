import React, { Component } from "react";

import Articles from "./Articles";
import Calendar from "./Calendar";
import Videos from "./Videos";
import Main from "./Main";
import { Route } from "react-router-dom";

export default class Learn extends Component {
  onClickCategory = which => {
    switch (which) {
      case "articles":
        this.props.history.push("/learn/articles");
        break;
      case "videos":
        this.props.history.push("/learn/videos");
        break;
      case "calendar":
        this.props.history.push("/learn/calendar");
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="text-center animated bounceIn beesContainer">
        <Route exact path="/learn" component={Main} />
        <Route exact path="/learn/videos" component={Videos} />
        <Route exact path="/learn/articles" component={Articles} />
        <Route exact path="/learn/calendar" component={Calendar} />
      </div>
    );
  }
}
