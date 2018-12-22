import axios from "axios";
import {
  GET_SALES,
  SET_CURRENT_SALE,
  GET_ERRORS,
  SALES_LOADING
} from "./types";

export const setCurrentSale = (saleData, history) => dispatch => {
  console.log("saledata from saleactions: " + JSON.stringify(saleData));
  dispatch({
    type: SET_CURRENT_SALE,
    payload: saleData
  });
};
