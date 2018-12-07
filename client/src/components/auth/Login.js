import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  componentDidMount() {
    if (
      this.props.auth.isAuthenticated &&
      this.props.auth.user.admin === false
    ) {
      this.props.history.push("/dashboard");
    } else if (
      this.props.auth.isAuthenticated &&
      this.props.auth.user.admin === true
    ) {
      this.props.history.push("admin-dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      console.log("authenticated, pushing to dashboard");
      if (nextProps.auth.user.admin) {
        this.props.history.push("/admin-dashboard");
      } else {
        this.props.history.push("/dashboard");
      }
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(event) {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  render() {
    const errors = this.state.errors;

    return (
      <div className="container container-fluid appContainer">
        <div className="col-md-8 m-auto login">
          <h1>Login</h1>

          <form onSubmit={this.onSubmit}>
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

            <input type="submit" className="btn btn-info btn-block submit" />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
