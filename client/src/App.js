import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./typography.css";
import Navbar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="contentContainer">
          <div className="buttons">
            <h1>B&K BEES</h1>
            <p className="tagline">Have Some Fun With Your Bees</p>
            <button className="btn btn-lg btn-dark">Order Bees</button>
            <button className="btn btn-lg btn-dark">Watch Videos</button>
            <button className="btn btn-lg btn-dark">Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
