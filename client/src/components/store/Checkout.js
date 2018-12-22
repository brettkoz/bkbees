import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Checkout extends Component {
  componentDidMount() {}
  render() {
    return <div />;
  }
}
const mapStateToProps = state => ({
  sale: state.sale
});
Checkout.propTypes = {
  sale: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Checkout);
