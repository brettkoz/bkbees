import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <footer className="footer container-fluid text-center">
      {/* <div className="container"> */}
      <a
        href="http://facebook.com/bkbees/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-square social" />
      </a>
      <a
        href="http://youtube.com/bkbees"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube social" />
      </a>
      <p>
        Copyright &copy; 2019 B&K Bees
        <span className="credit">
          This Site Was Engineered By:&nbsp;
          <a
            href="http://www.bkbeesites.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.bkbeesites.com
          </a>
        </span>
      </p>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
