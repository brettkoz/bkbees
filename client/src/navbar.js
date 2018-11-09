import React from "react";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg static-top">
      <div className="container">
        <a className="navbar-brand" href="http://www.google.com">
          <div className="logo" /> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="http://www.google.com">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.google.com">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.google.com">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.google.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
