import { combineReducers } from "redux";
import personList from "./PersonsList";

const rootReducer = combineReducers({
  personList,
});

export default rootReducer;
