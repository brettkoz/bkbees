import React, { Component } from "react";
import Spinner from "./../common/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "./../../config/config";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrentSale } from "./../../actions/saleActions";
import { withRouter } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      product: {},
      loading: true
    };
    this.buyCalendar = this.buyCalendar.bind(this);
  }
  buyCalendar() {
    console.log("clicked buyCalendar");
    // let reqBody = { productId: "688", quantity: 1 };
    // axios
    //   .post("http://localhost:5000/api/sales/purchase", reqBody)
    //   .then(res => {
    //     console.log(res);
    //     window.location = res.data.url;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    if (this.state.product === null) {
      return;
    }
    this.props.setCurrentSale({ product: this.state.product }, this.history);
    this.props.history.push("/checkout");
  }
  componentDidMount() {
    let productId = { productId: "688" };
    axios
      .post(config.BACKEND_URL + "/api/sales/products", productId)
      .then(res => {
        console.log(res.data.images[0]);
        let productData = res.data;
        this.setState({ product: productData, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let display;
    if (this.state.loading) {
      display = <Spinner />;
    } else {
      display = (
        <div className="productContainer card ">
          <h1>{this.state.product.name}</h1>
          <img
            className="mainProductPic"
            src={this.state.product.images[0].src}
          />
          ${this.state.product.price}
          <button
            className="btn btn-large btn-dark"
            onClick={() => this.buyCalendar()}
          >
            Buy Calendar
          </button>
        </div>
      );
    }
    return <div>{display}</div>;
  }
}
const mapStateToProps = state => ({
  sale: state.sale
});
Product.propTypes = {
  sale: PropTypes.object.isRequired,
  setCurrentSale: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { setCurrentSale }
)(withRouter(Product));
