import axios from "axios";
import {
  GET_ORDER,
  PLACE_ORDER,
  GET_ORDERS,
  SET_CURRENT_ORDER,
  GET_ERRORS,
  ORDERS_LOADING
} from "./types";

export const placeOrder = (orderData, history) => dispatch => {
  axios
    .post("http://localhost:5000/api/sales/order", orderData)
    .then(res => {
      console.log("response:" + res);
      dispatch({
        type: SET_CURRENT_ORDER,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const getAllOrders = () => dispatch => {
  console.log("getting All Orders");
  axios
    .get("http://localhost:5000/api/sales/orders")
    .then(res => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ORDERS,
        payload: {}
      })
    );
};

// Profile loading
export const setOrdersLoading = () => {
  return {
    type: ORDERS_LOADING
  };
};
