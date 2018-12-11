import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import Spinner from "./../common/Spinner";
import Orders from "./Orders";
import Content from "./Content";
import Users from "./Users";
import "./dashboard.css";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.onNavClick = this.onNavClick.bind(this);
    this.state = {
      activeComponent: "orders"
    };
  }

  onNavClick(com) {
    let prevComponent = this.state.activeComponent;
    if (prevComponent == com) {
      return;
    }
    console.log(com);
    switch (com) {
      case "orders":
        this.setState({ activeComponent: "orders" });
        break;
      case "content":
        this.setState({ activeComponent: "content" });
        break;
      case "users":
        this.setState({ activeComponent: "users" });
        break;
      default:
        break;
    }
  }

  render() {
    let dashboardContent;
    let activeComponent = this.state.activeComponent;
    switch (activeComponent) {
      case "orders":
        dashboardContent = <Orders />;
        console.log("dashboard content is orders");
        break;
      case "content":
        dashboardContent = <Content />;
        break;
      case "users":
        dashboardContent = <Users />;
        break;
      default:
        dashboardContent = <Orders />;
        break;
    }
    return (
      <div className="container-fluid adminDashboard">
        <ul className="nav nav-tabs nav-justified dashboardNav">
          <li className="nav-item">
            <button
              className={classnames("nav-link btn btn-link dashboardNavLink", {
                active: this.state.activeComponent === "orders"
              })}
              onClick={() => {
                this.onNavClick("orders");
              }}
            >
              Orders
            </button>
          </li>
          <li className="nav-item">
            <button
              className={classnames("nav-link btn btn-link dashboardNavLink", {
                active: this.state.activeComponent === "users"
              })}
              onClick={() => {
                this.onNavClick("users");
              }}
            >
              Users
            </button>
          </li>
          <li className="nav-item">
            <button
              className={classnames("nav-link btn btn-link dashboardNavLink", {
                active: this.state.activeComponent === "content"
              })}
              onClick={() => {
                this.onNavClick("content");
              }}
            >
              Content
            </button>
          </li>
        </ul>
        <div className="dashboardContainer">{dashboardContent}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(AdminDashboard);
