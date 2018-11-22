import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./typography.css";
import "./components/Landing.css";
import "./components/Navbar.css";
import "./components/OrderForm.css";
import "./components/auth/auth.css";

import { Provider } from "react-redux";
import Redux from "redux";
import store from "./store";

import Navbar from "./components/navbar";
import Landing from "./components/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Learn from './components/Learn';
import Footer from "./components/Footer";
import Bees from './components/Bees';
import Articles from './components/learn/Articles';
import Videos from './components/learn/Videos';
import Calendar from './components/learn/Calendar';
import Queens from './components/bees/Queens';
import Nucs from './components/bees/Nucs';
import Packages from './components/bees/Packages';
import { setCurrentUser, logoutUser } from "./actions/authAction";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/learn" component={Learn}/>
              <Route exact path="/bees" component={Bees} />

              <Route exact path="/bees/queens" component={Queens}/>
              <Route exact path="/bees/nucs" component={Nucs}/>
              <Route exact path="/bees/packages" component={Packages}/>

              <Route exact path="/learn/articles" component={Articles}/>
              <Route exact path="/learn/videos" component={Videos}/>
              <Route exact path="/learn/calendar" component={Calendar}/>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
