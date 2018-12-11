import React, { Component } from "react";
import classnames from "classnames";
import { getAllOrders } from "./../../actions/orderActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./../common/Spinner";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOrders: "queens"
    };
  }
  componentDidMount() {
    this.props.getAllOrders();
  }
  render() {
    const ordersProp = this.props.order.orders;
    console.log(ordersProp);
    let orderItems = {};
    if (ordersProp === null) {
      orderItems = <Spinner />;
    } else {
      if (Object.keys(ordersProp).length > 0) {
        orderItems = ordersProp.map(singleOrder => (
          <li key={singleOrder._id}>{singleOrder._id}</li>
        ));
      } else {
        orderItems = <h1>NO ORDERS MADDAFUKKA</h1>;
      }
    }

    return (
      <div className="orderContainer container-fluid text-center">
        <h1 className="display-4">Orders</h1>
        <ul className="nav orderNav justify-content-center">
          <li className="nav-item">
            <button
              className={classnames("btn btn-link nav-link orderLink", {
                activeOrderLink: this.state.activeOrders === "queens"
              })}
            >
              Queen
            </button>
          </li>
          <li className="nav-item">
            <button
              className={classnames("btn btn-link nav-link orderLink", {
                activeOrderLink: this.state.activeOrders === "nucs"
              })}
            >
              Nuc
            </button>
          </li>
          <li className="nav-item">
            <button
              className={classnames("btn btn-link nav-link orderLink", {
                activeOrderLink: this.state.activeOrders === "packages"
              })}
            >
              Package
            </button>
          </li>
        </ul>
        <ul>{orderItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order
});

Orders.propTypes = {
  getAllOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getAllOrders }
)(Orders);
