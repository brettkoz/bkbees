import React, { Component } from "react";
import classnames from 'classnames';
import PropTypes from "prop-types";
import { placeOrder } from "./../actions/orderActions";
import { connect } from "react-redux";

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(){

  }
  onSubmit(){

  }
  render() {
    const errors = this.state.errors;
    return (
      <div className="order-container">
      <h3>Order Queens</h3>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                className={classnames(
                  "form-control form-control-lg orderInput",
                  {
                    "is-invalid": errors.name
                  }
                )}
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid": errors.email
                  }
                )}
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="phone"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid": errors.phone
                  }
                )}
                placeholder="Phone"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="number"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid": errors.quantity
                  }
                )}
                placeholder="1"
                name="quantity"
                value={this.state.quantity}
                onChange={this.onChange}
                required
              />
              {errors.password2 && (
                <div className="invalid-feedback">{errors.quantity}</div>
              )}
            </div>
            <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="unmarked" value="unmarked"/>
  <label className="form-check-label" for="unmarked">Un-Marked</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="marked" value="marked"/>
  <label className="form-check-label" for="inlineRadio2">Marked (add $5)</label>
</div>
            
          </div>
          <input type="submit" className="btn btn-info btn-block submit" />
        </form>
      </div>
    );
  }
}

OrderForm.propTypes = {
  placeOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { placeOrder }
)(OrderForm);
