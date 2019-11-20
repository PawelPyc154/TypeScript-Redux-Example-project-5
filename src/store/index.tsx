import InputReducer from "./reduser1/reducer";
// import OutPutValueReducer from "./OutPutValue.js";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  InputReducer
});

export type AppState = ReturnType<typeof allReducers>;
export default allReducers;
