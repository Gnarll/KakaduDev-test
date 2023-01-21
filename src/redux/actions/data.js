import { FETCH_DATA, REQUEST_DATA } from "../actionTypes";

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data,
  };
};

export const requestData = () => {
  return {
    type: REQUEST_DATA,
  };
};
