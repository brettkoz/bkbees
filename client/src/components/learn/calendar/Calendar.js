import React, { Component } from "react";
import axios from "axios";
import Product from "./../../Product";
import config from "./../../../config/config";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.buyCalendar = this.buyCalendar.bind(this);
  }
  componentDidMount() {
    let productId = { productId: "688" };
    axios
      .post(config.BACKEND_URL + "/api/sales/products", productId)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  buyCalendar() {
    console.log("clicked buyCalendar");
    let reqBody = { productId: "688", quantity: 1 };
    axios
      .post("http://localhost:5000/api/sales/purchase", reqBody)
      .then(res => {
        console.log(res);
        window.location = res.data.url;
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Product productId="688" />
        <button className="btn btn-large" onClick={() => this.buyCalendar()}>
          Buy Calendar
        </button>
      </div>
    );
  }
}
