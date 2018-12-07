import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { placeOrder } from "../../actions/orderActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FormErrors } from "../common/FormErrors";

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      quantity: "",
      formErrors: { email: "", phone: "", quantity: "", name: "" },
      marked: false,
      emailValid: false,
      emailChanged: false,
      quantityValid: false,
      quantityChanged: false,
      nameValid: false,
      nameChanged: false,
      phoneValid: false,
      phoneChanged: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.order) {
      this.props.history.push("/thankyou");
    }
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let phoneValid = this.state.phoneValid;
    let quantityValid = this.state.quantityValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        nameValid = value.length >= 4;
        fieldValidationErrors.name = nameValid ? "" : " is too short";
        break;
      case "quantity":
        quantityValid = value > 0;
        fieldValidationErrors.quantity = quantityValid
          ? ""
          : " must be more than 0";
        break;
      case "phone":
        phoneValid = value.length >= 10;
        fieldValidationErrors.phone = phoneValid
          ? ""
          : " number must be 10 digits";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        phoneValid: phoneValid,
        quantityValid: quantityValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.nameValid &&
        this.state.phoneValid &&
        this.state.quantityValid
    });
  }
  onChange(e) {
    // e.preventDefault();
    let radioClick = false;
    this.setState({
      formErrors: { email: "", phone: "", quantity: "", name: "" }
    });

    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "name":
        this.setState({ nameChanged: true });
        break;
      case "phone":
        this.setState({ phoneChanged: true });
        break;
      case "quantity":
        this.setState({ quantityChanged: true });
        break;
      case "email":
        this.setState({ emailChanged: true });
        break;
      case "marked":
        this.setState({ marked: true });
        radioClick = true;

        break;
      case "unmarked":
        this.setState({ marked: false });
        radioClick = true;

        break;
      default:
        break;
    }
    if (!radioClick) {
      this.setState({ [name]: value }, () => {
        this.validateField(name, value);
      });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    let quantity = this.state.quantity;
    let name = this.state.name;
    let phone = this.state.phone;
    let email = this.state.email;
    let marked = this.state.marked;
    let order = {
      type: this.props.orderType,
      quantity: quantity,
      email: email,
      phone: phone,
      marked: marked,
      name: name
    };
    this.props.placeOrder(order);
  }
  render() {
    const errors = this.state.errors;

    let showMarkOptions = false;
    if (this.props.orderType === "queens") {
      showMarkOptions = true;
    }
    let totalErrors = { ...errors, ...this.state.formErrors };

    return (
      <div className="order-container">
        <h3>Order {this.props.orderType}</h3>
        <div className="panel panel-default">
          <FormErrors formErrors={totalErrors} />
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                className={classnames(
                  "form-control form-control-lg orderInput",
                  {
                    "is-invalid":
                      !this.state.nameValid && this.state.nameChanged
                  }
                )}
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid":
                      (!this.state.emailValid && this.state.emailChanged) ||
                      errors.email
                  }
                )}
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="tel"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid":
                      !this.state.phoneValid && this.state.phoneChanged
                  }
                )}
                placeholder="Phone"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input
                type="number"
                className={classnames(
                  "form-control form-control-lg authInput",
                  {
                    "is-invalid":
                      (!this.state.quantityValid &&
                        this.state.quantityChanged) ||
                      errors.quantity
                  }
                )}
                placeholder="Quantity"
                name="quantity"
                value={this.state.quantity}
                onChange={this.onChange}
                required
              />
            </div>
            <div
              className={
                showMarkOptions ? "form-check form-check-inline" : "hidden"
              }
            >
              <input
                className="form-check-input"
                type="radio"
                name="unmarked"
                id="unmarked"
                checked={this.state.marked === false}
                onChange={this.onChange}
                value="unmarked"
              />
              <label className="form-check-label" htmlFor="unmarked">
                Un-Marked
              </label>
            </div>
            <div
              className={
                showMarkOptions ? "form-check form-check-inline" : "hidden"
              }
            >
              <input
                className="form-check-input"
                type="radio"
                name="marked"
                id="marked"
                checked={this.state.marked === true}
                onChange={this.onChange}
                value="marked"
              />
              <label className="form-check-label" htmlFor="marked">
                Marked (add $5)
              </label>
            </div>
          </div>
          <input type="submit" className="btn btn-info btn-block submit" />
        </form>
      </div>
    );
  }
}

OrderForm.propTypes = {
  placeOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { placeOrder }
)(withRouter(OrderForm));
