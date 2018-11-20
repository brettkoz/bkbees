import React, { Component } from "react";
import OrderForm from "./OrderForm";
import queen from "./../assets/queen.jpg";
import nuc from "./../assets/nuc.jpg";
import packageBees from "./../assets/package.jpg";

class Bees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "categories"
    };
    this.onClickCategory = this.onClickCategory.bind(this);
  }
  onClickCategory(e) {
    switch (e) {
      case "queens":
        this.props.history.push("/bees/queens");
        break;
      case "nucs":
        this.props.history.push("/bees/nucs");
        break;
      case "packages":
        this.props.history.push("/bees/packages");
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="container container-fluid text-center">
        <h1>Bees</h1>
        <p className="lead">
          Create an account for one-click ordering and personalized availability
          and shipping information
        </p>
        <div className="categories">
          <div
            className="category card queens"
            onClick={e => {
              this.onClickCategory("queens");
            }}
          >
            <h3>Queens</h3>
            <img src={queen} className="categoryPic" />
          </div>
          <div
            className="category card nucs"
            onClick={() => {
              this.onClickCategory("nucs");
            }}
          >
            <h3>Nucs</h3>
            <img src={nuc} className="categoryPic" />
          </div>
          <div
            className="category card packages"
            onClick={() => {
              this.onClickCategory("packages");
            }}
          >
            <h3>Packages</h3>
            <img src={packageBees} className="categoryPic" />
          </div>
        </div>
      </div>
    );
  }
}

export default Bees;
