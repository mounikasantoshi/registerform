import { combineReducers } from "redux";
import personList from "./PersonsReducer";

const rootReducer = combineReducers({
  personList,
});

export default rootReducer;
