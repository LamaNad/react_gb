import { SET_NAME, TOGGLE_CHECKBOX } from "./actions";

const initialState = {
  setShowEditProfile: false,
  name: "defaultName",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX: {
      return {
        ...state,
        setShowEditProfile: !state.setShowEditProfile,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        name: action.newName,
      };
    }
    default:
      return state;
  }
};