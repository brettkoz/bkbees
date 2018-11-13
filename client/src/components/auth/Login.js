import React, { Component } from "react";

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
  onSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="container container-fluid appContainer">
      <div className="col-md-8 m-auto login">
        <h1>Login</h1>
        

        <form onSubmit={this.onSubmit}>
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
         
          <input type="submit" className="btn btn-info btn-block submit" />
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
