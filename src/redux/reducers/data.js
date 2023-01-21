import { FETCH_DATA } from "../actionTypes";
import initialState from "../initialState";

export default function data(state = initialState.data, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return { ...state, data: action.data };
    }
    default:
      return state;
  }
}
