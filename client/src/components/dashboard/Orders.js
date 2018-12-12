import React, { Component } from "react";
import classnames from "classnames";
import { getAllOrders } from "./../../actions/orderActions";
import PropTypes from "prop-types";
import OrderTable from './OrderTable';
import ActiveOrderComponent from './ActiveOrder';
import { connect } from "react-redux";
import Spinner from "./../common/Spinner";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOrders: "queens",
      activeOrder: null
    };
  }
  setActiveOrder = (order) => {
    console.log('setting active order: ' + order);
    this.setState({activeOrder:order});
  }
  componentDidMount() {
    this.props.getAllOrders();
  }
 onOrderNavClick(orderType){
   if (orderType == this.state.activeOrders){
     return;
   }
   switch (orderType){
     case 'queens':
     this.setState({activeOrders:'queens'})
     break;
     case 'nucs':
     this.setState({activeOrders:'nucs'});
     break;
     case 'packages':
     this.setState({activeOrders:'packages'});
     break;
     default:
     break;
   }
 }
  render() {
    const ordersProp = this.props.order.orders;
    let activeOrders = this.state.activeOrders;
    console.log(ordersProp);
    let orderItems = {};
    let queenOrders = [];
    let nucOrders = [];
    let packageOrders =[];
    if (ordersProp === null) {
      orderItems = <Spinner />;
    } else {
      if (Object.keys(ordersProp).length > 0) {
        ordersProp.map(singleOrder => {
          switch (singleOrder.type){
            case 'queens':
            queenOrders.push(singleOrder);
            break;
            case 'nucs':
            nucOrders.push(singleOrder);
            break;
            case 'packages':
            packageOrders.push(singleOrder);
            break;
            default:
            break;
          }
        });
        switch (activeOrders){
          case 'queens':
          orderItems = <OrderTable orders={queenOrders} activeOrder={this.state.activeOrder} setActive={this.setActiveOrder}/>
          break;
          case 'nucs':
          orderItems = <OrderTable orders={nucOrders} activeOrder={this.state.activeOrder}   setActive={this.setActiveOrder}/>
          break;
          case 'packages':
          orderItems = <OrderTable orders={packageOrders} activeOrder={this.state.activeOrder}   setActive={this.setActiveOrder}/>
          break;
          default:
          break;
        }
      } else {
        orderItems = <OrderTable orders={null}/>;
      }
    }

    return (
      <div className="orderContainer container-fluid text-center">
        <h1 className="display-4">Orders</h1>
        <ul className="nav orderNav justify-content-center">
          <li className="nav-item">
            <button
              className={classnames("btn btn-link nav-link orderLink", {
                activeOrderLink: this.state.activeOrders === "queens"
              })}
              onClick={() => this.onOrderNavClick('queens')}
            >
              Queen
            </button>
          </li>
          <li className="nav-item">
            <button
              className={classnames("btn btn-link nav-link orderLink", {
                activeOrderLink: this.state.activeOrders === "nucs"
              })}
              onClick={() => this.onOrderNavClick('nucs')}
            >
              Nuc
            </button>
          </li>
          <li className="nav-item">
            <button
              className={classnames("btn btn-link nav-link orderLink", {
                activeOrderLink: this.state.activeOrders === "packages"
              })}
              onClick={() => this.onOrderNavClick('packages')}
            >
              Package
            </button>
          </li>
        </ul>
        {orderItems}
        <ActiveOrderComponent order={this.state.activeOrder}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order
});

Orders.propTypes = {
  getAllOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getAllOrders }
)(Orders);
