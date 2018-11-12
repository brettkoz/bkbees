import React, { Component } from "react";
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

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="card formCard col-md-8 m-auto">
        <h1>Register</h1>
        <p className="lead">Create Your B&K Bees Account</p>

        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg authInput"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg authInput"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg authInput"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg authInput"
                placeholder="Confirm Password"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <input type="submit" className="btn btn-info btn-block" />
        </form>
      </div>
    );
  }
}

export default Register;
