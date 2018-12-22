import { SET_CURRENT_SALE } from "../actions/types";

const initialState = {
  saleData: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SALE:
      return {
        ...state,
        sale: action.payload
      };
    default:
      return state;
  }
}
