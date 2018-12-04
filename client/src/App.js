import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./typography.css";
import "./components/Landing.css";
import "./components/Navbar.css";
import "./components/common/OrderForm.css";
import "./components/auth/auth.css";
import "./animate.css";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar";
import Landing from "./components/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Learn from "./components/Learn";
import Footer from "./components/Footer";
import Bees from "./components/bees/Bees";
import ThankYou from "./components/common/ThankYou";
import PrivateRoute from "./components/common/PrivateRoute";
import AdminRoute from "./components/common/AdminRoute";
import Dashboard from "./components/dashboard/Dashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingBG from "./assets/bg.jpg";
import PagesBg from "./assets/bgSVG.svg";

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
  appDivStyle = {};

  constructor(props) {
    super(props);
    this.state = {
      bg: ""
    };
  }

  changeBg = page => {
    console.log("current state page is:" + this.state.bg);
    switch (page) {
      case "landing":
        this.setState({ bg: "landing" });
        console.log("current bg state " + this.state.bg);
        break;
      case "pages":
        this.setState({ bg: "pages" });
        console.log(
          "current bg state should be pages but is: " + this.state.bg
        );
        break;
      default:
        break;
    }
  };
  render() {
    const currentBg = this.state.bg;
    console.log("from render, state is: " + currentBg);
    switch (currentBg) {
      case "landing":
        console.log("caught in switch");
        this.appDivStyle = {
          backgroundImage: "url(" + LandingBG + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        };
        console.log(this.appDivStyle);
        break;
      case "pages":
        console.log("adding pages to appdivstyle");
        this.appDivStyle = {
          backgroundImage: "url(" + PagesBg + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        };
        break;
      default:
        this.appDivStyle = {
          backgroundImage: "url(" + LandingBG + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        };
        break;
    }
    return (
      <Provider store={store}>
        <Router>
          <div
            className="App d-flex flex-column animated fadeIn"
            style={this.appDivStyle}
          >
            <Navbar changeBg={this.changeBg} />
            <Route exact path="/" component={Landing} />
            <div className="main container-fluid">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/learn" component={Learn} />
              <Route path="/bees" component={Bees} />
              <Route exact path="/thankyou" component={ThankYou} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <AdminRoute
                  exact
                  path="/admin-dashboard"
                  component={AdminDashboard}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
