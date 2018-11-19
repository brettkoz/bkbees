import axios from "axios";
import { GET_ORDER, PLACE_ORDER, GET_ORDERS } from "./types";

export const placeOrder = orderData => dispatch => {
  axios
    .post("http://localhost:5000/api/sales/order", orderData)
    .then()
    .catch();
};
