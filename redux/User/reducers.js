import { combineReducers } from "redux";
import { LOGIN, LOGIN_RESPONSE, LOGOUT } from "./actions";

const initialState = {
  userInfo: {},
  account: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, account: action.payload };
    case LOGIN_RESPONSE:
      return { ...state, userInfo: action.payload.data };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

const allReducer = combineReducers({
  user: userReducer,
});

export default allReducer;
