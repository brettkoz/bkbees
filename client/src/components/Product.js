import React, { Component } from "react";
import Spinner from "./common/Spinner";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      product: {},
      loading: true
    };
  }
  componentDidMount() {}
  render() {
    let display;
    if (this.state.loading) {
      display = <Spinner />;
    } else {
      display = <h1>Product Info</h1>;
    }
    return <div>{display}</div>;
  }
}
