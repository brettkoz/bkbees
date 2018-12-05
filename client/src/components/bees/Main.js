import React from "react";
import { Link } from "react-router-dom";
import queen from "./../../assets/queen.jpg";
import nuc from "./../../assets/nuc.jpg";
import packageBees from "./../../assets/package.jpg";

export default function Main() {
  console.log("got to bees Main");
  return (
    <div className="bees">
      <h1 className="display-2">Bees</h1>
      <div className="categories">
        <Link className="category card queens" to="/bees/queens">
          <h3 className="display-4">Queens</h3>
          <img src={queen} className="categoryPic" alt="Queens" />
        </Link>
        <Link className="category card nucs" to="/bees/nucs">
          <h3 className="display-4">Nucs</h3>
          <img src={nuc} className="categoryPic" alt="Nucs" />
        </Link>
        <Link className="category card packages" to="/bees/packages">
          <h3 className="display-4">Packages</h3>
          <img src={packageBees} className="categoryPic" alt="Packages" />
        </Link>
      </div>
    </div>
  );
}
