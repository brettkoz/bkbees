import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";

export default class Success extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    let paymentId = values.paymentId;
    let payerId = values.PayerId;
    let token = values.token;
    console.log("paymentId: " + paymentId);
    let reqBody = { paymentId: paymentId, payerId: payerId, token: token };
    axios
      .post("http://localhost:5000/api/sales/execute", reqBody)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <div>SUCCESS MOTHERFUCKER!</div>;
  }
}
