import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./typography.css";
import Navbar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
        <div className="contentContainer">
            

            <div className="buttons">
            <h1>B&K BEES</h1>
            <button className="btn btn-outline-primary">Order Bees</button>
            <button className="btn btn-outline-primary">Watch Videos</button>
            <button className="btn btn-outline-primary">Other Shit</button>
            </div>
          
        </div>
      </div>
    );
  }
}

export default App;
