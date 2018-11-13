import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./typography.css";
import "./components/Landing.css";
import "./components/Navbar.css";
import Navbar from "./components/navbar";
import Landing from './components/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Landing }/>
        <div className="container">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        </div>
        <Footer/>
      </div>
      
      </Router>
    );
  }
}

export default App;
