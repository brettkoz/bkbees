import React from 'react';
import {Link} from 'react-router-dom';
import queen from "./../../assets/queen.jpg";
import nuc from "./../../assets/nuc.jpg";
import packageBees from "./../../assets/package.jpg";

export default function Main() {
    console.log('got to bees Main');
  return (
    <div className="bees">
       <h1>Bees</h1>
        <p className="lead">
          Create an account for one-click ordering and personalized availability
          and shipping information
        </p>
        <div className="categories">
          <Link
            className="category card queens"
            to='/bees/queens'
          >
            <h3>Queens</h3>
            <img src={queen} className="categoryPic" alt="Queens" />
          </Link>
          <Link
            className="category card nucs"
            to="/bees/nucs"
          >
            <h3>Nucs</h3>
            <img src={nuc} className="categoryPic" alt="Nucs" />
          </Link>
          <Link
            className="category card packages"
            to='/bees/packages'
          >
            <h3>Packages</h3>
            <img src={packageBees} className="categoryPic" alt="Packages" />
          </Link>
        </div>
    </div>
  )
}
