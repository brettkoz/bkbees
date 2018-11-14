import React, { Component } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import "./auth.css";

class Register extends Component {
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      errors: this.state.errors
    };
    this.props.registerUser(user, this.props.history);
    console.log(user);
  }

  render() {
    const errors = this.state.errors;
    return (
      <div className="container container-fluid appContainer">
        <div className="formCard col-md-8 m-auto">
          <h1>Register</h1>
          <p className="lead">Create Your B&K Bees Account</p>

          <form noValidate onSubmit={this.onSubmit}>
            <div className="row">
              <div className="form-group">
                <input
                  type="text"
                  className={classnames(
                    "form-control form-control-lg authInput",
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
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
