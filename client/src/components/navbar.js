import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authAction";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {
    toggler: false
  };
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  onLogoutClick(e) {
    console.log("clicked logout");
    e.preventDefault();
    this.props.logoutUser();
  }
  toggleNav(type) {
    let newToggler = this.state.toggler;
    newToggler = !newToggler;
    console.log(newToggler);
    this.setState({ toggler: newToggler });
  }

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            onClick={() => {
              this.toggleNav("button");
              console.log("clicked");
            }}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={e => {
              this.onLogoutClick(e);
              this.toggleNav("button");
            }}
            className="nav-link"
          >
            Logout
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            onClick={() => {
              this.toggleNav("button");
              console.log("clicked");
            }}
            to="/register"
          >
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            onClick={() => {
              this.toggleNav("button");
              console.log("clicked");
            }}
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light static-top">
        <div className="container navContainer">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => {
              this.toggleNav("button");
              console.log("clicked");
              this.props.changeBg("landing");
            }}
          >
            <div className="logo" />
            <h1 className="logoText">
              <b>B&K</b> BEES
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              this.toggleNav("button");
              console.log("clicked");
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              "collapse navbar-collapse" + (this.state.toggler ? " show " : "")
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.toggleNav("button");
                    console.log("clicked");
                    this.props.changeBg("pages");
                  }}
                  to="/bees"
                >
                  Bees
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.toggleNav("button");
                    console.log("clicked");
                    this.props.changeBg("pages");
                  }}
                  to="/learn"
                >
                  Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.toggleNav("button");
                    console.log("clicked");
                    this.props.changeBg("pages");
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => {
                    this.toggleNav("button");
                    console.log("clicked");
                    this.props.changeBg("pages");
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
