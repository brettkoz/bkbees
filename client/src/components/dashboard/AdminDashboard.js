import React, { Component } from "react";
import { getAllOrders } from "./../../actions/orderActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./../common/Spinner";

class AdminDashboard extends Component {
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
      <div>
        <ul>{orderItems}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  order: state.order,
  auth: state.auth
});

AdminDashboard.propTypes = {
  getAllOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { getAllOrders }
)(AdminDashboard);
