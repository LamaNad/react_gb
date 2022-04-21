import { FETCH_STATUSES } from "../../utils/constants";
import { GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from "./action";

const initialState = {
    data: [],
    status: FETCH_STATUSES.IDLE,
    error: null,
};

export const nationalizeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_ARTICLES_REQUEST: {
      return {...state, status: FETCH_STATUSES.REQUEST, error: null};
    }
    case GET_ARTICLES_FAILURE: {
      return {...state, status: FETCH_STATUSES.FAILURE, error: payload };
    }
    case GET_ARTICLES_SUCCESS: {
      return {...state, status: FETCH_STATUSES.SUCCES, data: payload };
    }
    default:
      return state;
  }
};