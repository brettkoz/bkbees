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
          <h1>B&K BEES</h1>
        </div>
      </div>
    );
  }
}

export default App;
