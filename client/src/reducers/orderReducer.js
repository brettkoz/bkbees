import {
  SET_CURRENT_ORDER,
  GET_ORDERS,
  ORDERS_LOADING
} from "../actions/types";

const initialState = {
  order: null,
  orders: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    case ORDERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
