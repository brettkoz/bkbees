import { SET_CURRENT_ORDER } from "../actions/types";

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
      order:action.payload
    }
    default:
      return state;
  }
}
