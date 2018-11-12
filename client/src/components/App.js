import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./typography.css";
import Navbar from "./components/navbar";
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Landing }/>
      </div>
      </Router>
    );
  }
}

export default App;
