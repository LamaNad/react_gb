import { FETCH_STATUSES } from "../../utils/constants";
import { GET_NATIONALIZE_FAILURE, GET_NATIONALIZE_REQUEST, GET_NATIONALIZE_SUCCESS } from "./action";

const initialState = {
  data: [],
  status: FETCH_STATUSES.IDLE,
  error: null,
};

export const nationalizeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NATIONALIZE_REQUEST: {
      return { ...state, status: FETCH_STATUSES.REQUEST, error: null };
    }
    case GET_NATIONALIZE_FAILURE: {
      return { ...state, status: FETCH_STATUSES.FAILURE, error: payload };
    }
    case GET_NATIONALIZE_SUCCESS: {
      return { ...state, status: FETCH_STATUSES.SUCCES, data: payload };
    }
    default:
      return state;
  }
};