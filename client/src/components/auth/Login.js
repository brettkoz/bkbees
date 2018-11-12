import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="card">
        <h1>Login</h1>
        <div className="container">
          <form>
            <div className="row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
