import allReducer from "./User/reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
