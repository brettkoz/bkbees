import React, { Component } from "react";
import PropTypes from "prop-types";
import { placeOrder } from "../../actions/orderActions";
import { connect } from "react-redux";

class Orderform extends Component {
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
  render() {
    return (
      <div className="container">
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
                type="password"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid": errors.password
                  }
                )}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="password"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid": errors.password2
                  }
                )}
                placeholder="Confirm Password"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
                required
              />
              {errors.password2 && (
                <div className="invalid-feedback">{errors.password2}</div>
              )}
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
  order: state.order
});

export default connect(
  mapStateToProps,
  { placeOrder }
)(OrderForm);
